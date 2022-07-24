import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { TPost } from '../../types/common';
import * as api from '../api';
import { AppDispatch, RootState } from '../store';

type TPostsState = {
  posts: TPost[];
  page: number;
  isLoading: boolean;
  hasMore: boolean;
  error?: string;
  q: string;
};

type TConfig = {
  state: RootState;
  dispatch: AppDispatch;
};

const initialState: TPostsState = {
  posts: [],
  page: 1,
  isLoading: false,
  hasMore: true,
  q: 'Nasa'
};

export const listPosts = createAsyncThunk<api.TMappedREsponse, boolean | undefined, TConfig>(
  'posts/fetchPosts',
  (reset = false, { rejectWithValue, getState, dispatch }) => {
    const { page, q } = getState().posts;
    return api.posts.everything({ page: reset ? 1 : page, q })
      .catch((err) => rejectWithValue(err.response.data.message))
  }
);

export const postsSlice = createSlice({
  name: 'news',
  initialState,
  reducers: {
    setQuery: (state, action) => {
      state.q = action.payload;
    },
    setPage: (state, action) => {
      state.page = action.payload;
    },
    reset: () => {
      return initialState;
    }
  },
  extraReducers: (builder) => {
    builder.addCase(listPosts.fulfilled, (state, action) => {
      const { posts, total } = action.payload;
      const reset = action.meta.arg;
      state.page = reset ? 1 : state.page;
      state.isLoading = false;
      state.posts = state.page === 1 ? posts : [...state.posts, ...posts];
      state.hasMore = state.posts.length < total;
      state.page++;
      state.error = undefined;
    });

    builder.addCase(listPosts.pending, (state) => {
      state.isLoading = true;
    });

    builder.addCase(listPosts.rejected, (state, action) => {
      state.error = action.payload as string;
      state.hasMore = false;
    });
  }
});

export const { setQuery, reset, setPage } = postsSlice.actions;

export default postsSlice.reducer;
