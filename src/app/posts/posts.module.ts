import { IonicModule } from '@ionic/angular';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { PostsPage } from '@/app/posts/posts.page';
import { PostDetailPage } from '@/app/posts/detail/post-detail-page';

@NgModule({
    imports: [
        IonicModule,
        CommonModule,
        FormsModule
    ],
    declarations: [ PostsPage, PostDetailPage ]
})
export class PostsPageModule {
}
