import { ActionType, createAction, props } from '@ngrx/store';
import { Post } from '../../models/post/post.model';

export const GET_POSTS = '[POST] Get Posts';
export const GET_POSTS_SUCCESS = '[POST] Get Posts Success';
export const GET_POSTS_FAILURE = '[POST] Get Posts Failure';

export const getPosts = createAction(GET_POSTS);
export const getPostsSuccess = createAction(GET_POSTS_SUCCESS, props<{ posts: Post[] }>());
export const getPostsFailure = createAction(GET_POSTS_FAILURE, props<{ error?: string }>());

export type PostActions =
  | ActionType<typeof getPosts>
  | ActionType<typeof getPostsSuccess>
  | ActionType<typeof getPostsFailure>;
