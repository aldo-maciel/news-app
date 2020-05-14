import { Component } from '@angular/core';
import { PostsPage } from '@/app/posts/posts.page';

@Component({
    selector: 'app-home',
    templateUrl: 'home.page.html'
})
export class HomePage {
    public rootPage: any = PostsPage;
}
