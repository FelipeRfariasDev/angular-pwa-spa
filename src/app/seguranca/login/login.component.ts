import {Component} from '@angular/core';
import {UsuariosModels} from '../../usuarios/usuarios.models';
import {SegurancaService} from '../seguranca.service';
import {Router} from '@angular/router';

@Component({
  selector: 'login',
  templateUrl: './login.html'
})
export class LoginComponent {

  usuario = {} as UsuariosModels;
  msg:String;

  constructor(
    private service: SegurancaService,
    private router: Router
  ) { }

  async login() {
    try {
      const result = await this.service.login(this.usuario);
      console.log('Sucesso login: ' + result);
      await this.router.navigate(['']);
    } catch (error) {

      this.msg = "email e senha não foi encontrado";
      console.log(error);
    }
  }
}
