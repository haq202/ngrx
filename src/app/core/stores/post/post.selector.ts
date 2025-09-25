import { createFeatureSelector, createSelector } from "@ngrx/store";
import { PostState } from "./post.state";

const featurePost = createFeatureSelector<PostState>('feature_post'); // feature key

export const postsSelector = createSelector(featurePost, state => state.posts);
export const statusSelector = createSelector(featurePost, state => state.status);