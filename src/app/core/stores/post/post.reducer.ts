import { PostState } from './post.state';
import * as PostActions from './post.action';
import { createReducer, on } from '@ngrx/store';

const initialPostState: PostState = {
  posts: [],
  error: '',
  status: 'idle',
};

export const postReducer = createReducer(
  initialPostState,

  on(PostActions.getPosts, (state) => ({
    ...state,
    status: 'loading',
    error: null,
  })),

  on(PostActions.getPostsSuccess, (state, { posts }) => ({
    ...state,
    posts,
    error: null,
    status: 'success',
  })),

  on(PostActions.getPostsFailure, (state, { error }) => ({
    ...state,
    posts: [],
    error,
    status: 'error',
  }))
);
