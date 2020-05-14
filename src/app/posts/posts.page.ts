import { Component, OnInit } from '@angular/core';
import { IonNav } from '@ionic/angular';

import { PostsService } from '@/app/posts/posts.service';
import { PostType } from '@/app/posts/postType';
import { PostDetailPage } from '@/app/posts/detail/post-detail-page';
import { onError } from '@/shared/error';

@Component({
    selector: 'app-posts',
    templateUrl: 'posts.page.html'
})
export class PostsPage implements OnInit {
    news: PostType[] = [];

    constructor(private service: PostsService,
                public navCtrl: IonNav) { }

    async ngOnInit() {
        try {
            this.news = await this.service.getPosts();
        } catch (error) {
            onError(error.message);
        }
    }

    goToDetail(id: number) {
        this.navCtrl.push(PostDetailPage, { id });
    }
}
