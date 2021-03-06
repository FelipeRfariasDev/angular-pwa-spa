import { Component,OnInit } from '@angular/core';

import { Usuarios } from '../usuarios.models';
import { UsuariosService } from '../usuarios.service';

@Component({
  selector: 'login',
  templateUrl: './login.html'
})
export class UsuariosLoginComponent implements OnInit {

  usuario = {} as Usuarios;
  msg:String;

  constructor(private service: UsuariosService) { }

  ngOnInit(): void {}
  
  login() {
    
    this.service.login(this.usuario).subscribe((retorno) => {
      var r = (JSON.stringify(retorno));
 
      console.log(retorno);

      console.log(r);
      this.msg = "Login com sucesso";
    });
  }

}
