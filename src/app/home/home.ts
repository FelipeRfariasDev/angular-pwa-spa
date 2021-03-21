import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'home',
  templateUrl: './home.html'
})
export class HomeComponent implements OnInit {

  msg:String;

  constructor() { }

  ngOnInit(): void {
  }

}
