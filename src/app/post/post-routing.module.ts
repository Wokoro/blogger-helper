import { NgModule } from '@angular/core'
import { Routes, RouterModule } from '@angular/router'

import { CreateMusicComponent } from './create-music/create-music.component';
import { PostComponent } from './post.component';
import { PostHomeComponent } from './post-home/post-home.component';
import { CreateVideoComponent } from './create-video/create-video.component';
import { CreateNewsComponent } from './create-news/create-news.component';

const postRoutes : Routes = [{
    path : 'post',
    component:PostComponent,
    children : [
        {path : '', component:PostHomeComponent},
        {path : 'create-music', component:CreateMusicComponent, outlet:'section'},
        {path : 'create-video', component:CreateVideoComponent, outlet:'section'},
        {path : 'create-news', component:CreateNewsComponent, outlet:'section'}
    ]
}]

@NgModule({
    imports:[RouterModule.forChild(postRoutes)],
    exports : [RouterModule]
})

export class PostRoutingModule{}