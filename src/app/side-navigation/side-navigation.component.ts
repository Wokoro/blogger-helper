import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-side-navigation',
  templateUrl: './side-navigation.component.html',
  styleUrls: ['./side-navigation.component.css']
})
export class SideNavigationComponent implements OnInit {
  
  navList:any[];

  constructor() {
    this.navList = [{name:"H", link:"home"},
                    {name:"P", link:"post"},
                    {name:"S", link:"setting"},
                    {name:"A", link:"about"}]
   }
  
  ngOnInit() {
  }

  /* Toggle between adding and removing the "responsive" class to topnav when the user clicks on the icon */
 myFunction() {
    var x = document.getElementById("myTopnav");
    if (x.className === "topnav") {
        x.className += " responsive";
    } else {
        x.className = "topnav";
    }
  }

}
