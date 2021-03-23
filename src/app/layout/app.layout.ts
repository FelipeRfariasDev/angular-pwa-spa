import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.layout.html'
})

export class AppLayout {

  access_token:any = window.localStorage.getItem('access_token');

}
