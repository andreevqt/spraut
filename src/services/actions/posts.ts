import { TPost } from '../../types/common';

export enum PostActionType {
  FULFILLED = 'POST_FULFILLED',
  PENDING = 'POST_PENDING',
  ERROR = 'ERROR'
};

export type TPostActionPending = {
  type: PostActionType.PENDING;
};

export type TPostActionFulfilled = {
  type: PostActionType.FULFILLED;
  data: TPost[]
};

export type TPostActionError = {
  type: PostActionType.ERROR,
  error: string;
}

export type TPostActionType =
  | TPostActionPending
  | TPostActionFulfilled
  | TPostActionError;

export const setPendinng = (): TPostActionType => ({
  type: PostActionType.PENDING
});

export const setFullfilled = (data: TPost[]): TPostActionType => ({
  type: PostActionType.FULFILLED,
  data
});

export const setError = (error: string): TPostActionType => ({
  type: PostActionType.ERROR,
  error
});
