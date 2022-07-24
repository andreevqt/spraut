import axios, { AxiosResponse } from 'axios';
import { TPost } from '../types/common';
import mapper from './mapper';
import { TEverythingResponse as TArticlesResponse } from './responses';

const BASE_URL = 'https://newsapi.org/v2';

const request = axios.create({ baseURL: BASE_URL, params: { apiKey: process.env.REACT_APP_API_KEY } });

export type TMappedREsponse = {
  posts: TPost[];
  total: number;
};

const mapResponse = (response: AxiosResponse<TArticlesResponse, any>): TMappedREsponse => ({
  posts: response.data.articles.map(mapper),
  total: response.data.totalResults
});

type TTopParams = {
  q?: string;
  page?: number;
  pageSize?: string;
  country?: string;
};

type TEverythingParams = {
  q?: string;
  pageSize?: number;
  from?: string;
  page?: number;
};

export const posts = {
  top: (params: TTopParams = {}) => request.get<TArticlesResponse>('/top-headlines', { params: { country: 'us', q: '', page: 1, pageSize: 7, ...params } })
    .then(mapResponse),

  everything: (params: TEverythingParams) => request.get<TArticlesResponse>('/everything', { params: { q: '', page: 1, searchIn: 'title', pageSize: 7, ...params } })
    .then(mapResponse)
};
