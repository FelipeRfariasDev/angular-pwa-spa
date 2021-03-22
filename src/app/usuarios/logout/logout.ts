import { Component,OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { Usuarios } from '../usuarios.models';
import { UsuariosService } from '../usuarios.service';

@Component({
  selector: 'logout',
  templateUrl: './login.html'
})
export class UsuariosLogoutComponent implements OnInit {

  usuario = {} as Usuarios;
  msg:String;


  constructor(private service: UsuariosService, private router: Router) { }

  ngOnInit(): void {

    try {

        window.localStorage.setItem('access_token','');
        console.log('Logout realizado com sucesso: ');
        this.router.navigate(['']);
        
      } catch (error) {
  
        
        console.log(error);
  
      }

  }

}
