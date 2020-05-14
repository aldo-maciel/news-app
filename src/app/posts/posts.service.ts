import { ServiceFacade } from '@/shared/service/facade.service';
import { PostType } from '@/app/posts/postType';
import { Injectable } from '@angular/core';
import { PostDetailType } from '@/app/posts/detail/post-detail.type';

@Injectable({ providedIn: 'any' })
export class PostsService extends ServiceFacade {

    private get URL() {
        return '/posts';
    }

    getPosts() {
        return this.doGet<PostType[]>(this.URL);
    }

    getPostById(postId: number) {
        return this.doGet<PostType>(`${ this.URL }/${ postId }`);
    }

    getCommentsByPost(postId: number) {
        return this.doGet<PostDetailType[]>(`${ this.URL }/${ postId }/comments`);
    }
}
