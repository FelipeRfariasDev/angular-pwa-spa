import { Component,OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { Usuarios } from '../usuarios.models';
import { UsuariosService } from '../usuarios.service';

@Component({
  selector: 'autenticacao',
  templateUrl: './autenticacao.html'
})
export class AutenticacaoComponent implements OnInit {

  usuario = {} as Usuarios;
  msg:String;


  constructor(private service: UsuariosService, private router: Router) { }

  ngOnInit(): void {}
  
  
  async login() {

    try {

      const result = await this.service.login(this.usuario);
      console.log('Sucesso login: ' + result);
      this.msg = "Login realizado com sucesso";
      this.router.navigate(['contatos-listar']);
    } catch (error) {

      
      console.log(error);

    }
      
  }

}

