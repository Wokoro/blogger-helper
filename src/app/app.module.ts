import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms'
import { CommonModule } from '@angular/common'

import { AppComponent } from './app.component';
import { SideNavigationComponent } from './side-navigation/side-navigation.component';
import { AppRoutingModule } from './app-routing.module';
import { HomeComponent } from './home/home.component';
import { FooterComponent } from './footer/footer.component';
import { SettingComponent } from './setting/setting.component';
import { AboutComponent } from './about/about.component';
import { HeaderComponent } from './header/header.component';
import { PostModule } from './post/post.module';

@NgModule({
  declarations: [
    AppComponent,
    SideNavigationComponent,
    HomeComponent,
    FooterComponent,
    SettingComponent,
    AboutComponent,
    HeaderComponent
  ],
  imports: [
    FormsModule,
    BrowserModule,
    CommonModule,
    PostModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
