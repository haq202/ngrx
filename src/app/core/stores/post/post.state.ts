import { Post } from "../../models/post/post.model";

export interface PostState {
    posts: Post[];
    error?: string | null;
    status: 'idle' | 'loading' | 'error' | 'success';
}