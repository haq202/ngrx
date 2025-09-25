import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { getPosts, getPostsFailure, getPostsSuccess } from './post.action';
import { PostService } from '../../services/post/post-service';
import { catchError, map, of, switchMap } from 'rxjs';

@Injectable()
export class PostEffect {
  constructor(private actions$: Actions, private postService: PostService) {}

  loadPosts$ = createEffect(() =>
    this.actions$.pipe(
      ofType(getPosts),
      switchMap(() => this.postService.getPosts()),
      map((posts) => getPostsSuccess({ posts })),
      catchError((error) => of(getPostsFailure({ error })))
    )
  );
}
