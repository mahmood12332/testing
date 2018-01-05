import { Component, OnInit } from '@angular/core';
import {trigger,style,transition,animate,keyframes,query,stagger} from '@angular/animations'
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
   
  count: number = 546;
  texts: string = "button well";
  texxts:string = 'all is well';
  goals = [];
  constructor() { }

  ngOnInit() {
    this.count = this.goals.length;
  }
  addItem(){
    this.goals.push(this.texxts);
    this.texxts = '';
    this.count = this.goals.length;

  }
}
