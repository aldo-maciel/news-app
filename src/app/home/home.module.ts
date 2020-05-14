import { IonicModule } from '@ionic/angular';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { HomePageRoutingModule } from '@/app/home/home-routing.module';
import { HomePage } from '@/app/home/home.page';
import { PostsPageModule } from '@/app/posts/posts.module';

@NgModule({
    imports: [
        IonicModule,
        CommonModule,
        FormsModule,
        HomePageRoutingModule,
        PostsPageModule
    ],
    declarations: [ HomePage ]
})
export class HomePageModule {
}
