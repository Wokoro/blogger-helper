import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-post-home',
  templateUrl: './post-home.component.html',
  styleUrls: ['./post-home.component.css']
})
export class PostHomeComponent implements OnInit {

  navs: any[];

  link;

  constructor() { 
    this.link = [{outlets:{section:['create-music']}}]
    this.navs = [
      {name:"music", link : [ { outlets : { section : ['create-music'] } }]},
      {name:"video", link : [ { outlets : { section : ['create-video'] } }]},
      {name:"news", link : [ { outlets : { section : ['create-news'] } }]}
    ];
  }

  ngOnInit() {
  }

}
