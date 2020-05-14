import { Component, OnInit } from '@angular/core';
import { IonNav, NavParams } from '@ionic/angular';
import { PostsService } from '@/app/posts/posts.service';
import { PostType } from '@/app/posts/postType';
import { PostDetailType } from '@/app/posts/detail/post-detail.type';
import { onError } from '@/shared/error';

@Component({
    selector: 'app-post-detail',
    templateUrl: 'post-detail-page.html',
    styleUrls: [ 'post-detail-page.scss' ]
})
export class PostDetailPage implements OnInit {
    private readonly postId: number;
    post: PostType = {} as PostType;
    comments: PostDetailType[] = [];

    constructor(navParams: NavParams,
                private service: PostsService,
                public navCtrl: IonNav) {
        this.postId = navParams.data.id;
    }

    ngOnInit() {
        Promise.all([ this.getPostData(), this.getPostComments() ]);
    }

    goToPosts() {
        this.navCtrl.pop();
    }

    private async getPostData() {
        try {
            this.post = await this.service.getPostById(this.postId);
        } catch (error) {
            onError('It\'s not possible to get the post');
        }
    }

    private async getPostComments() {
        try {
            this.comments = await this.service.getCommentsByPost(this.postId);
        } catch (error) {
            onError('It\'s not possible to get the comments');
        }
    }
}
