import { Component } from '@angular/core';
import {Router} from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.layout.html'
})

export class AppLayout {

  access_token:any = window.localStorage.getItem('access_token');

  constructor(private router: Router) {
    if(this.access_token){
      this.access_token = true;
    }
    this.access_token = false;
  }

  Logout() {

    console.log('sair');
    localStorage.removeItem('access_token');
    this.router.navigate(['login']);
  }

}
