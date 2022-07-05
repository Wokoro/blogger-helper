import { NgModule }             from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { SettingComponent } from './setting/setting.component';
import { AboutComponent } from './about/about.component';

const routes: Routes = [
  {path:'home', component : HomeComponent, data:{title:"home"}},
  {path:'setting', component : SettingComponent, data:{title:"settings"}},
  {path:'about', component : AboutComponent, data:{title:"about"}},
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  { path: '**', redirectTo: '/home', pathMatch: 'full' }  
];

@NgModule({
  imports: [ RouterModule.forRoot(routes, {enableTracing: true}) ],
  exports: [ RouterModule ]
})

export class AppRoutingModule {}



