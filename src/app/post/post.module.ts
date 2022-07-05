import {NgModule} from '@angular/core'
import {CommonModule} from '@angular/common'
import { CreateMusicComponent } from './create-music/create-music.component';
import { CreateVideoComponent } from './create-video/create-video.component';
import { PostHomeComponent } from './post-home/post-home.component';
import { PostComponent } from './post.component';
import { PostRoutingModule } from './post-routing.module';
import { CreateNewsComponent } from './create-news/create-news.component';

@NgModule({
    declarations:[
        CreateMusicComponent,
        CreateVideoComponent,
        CreateNewsComponent,
        PostHomeComponent,
        PostComponent
    ],
    imports:[
        PostRoutingModule,
        CommonModule
    ]
})
export class PostModule{}