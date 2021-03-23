import {Component} from '@angular/core';
import {UsuariosModels} from '../usuarios.models';
import {Router} from '@angular/router';
import {SegurancaService} from '../../seguranca/seguranca.service';

@Component({
  selector: 'novo_usuario',
  templateUrl: './novo.usuario.html'
})
export class NovoUsuarioComponent {

    usuario = {} as UsuariosModels;
    msg:String;

    constructor(
    private service: SegurancaService,
    private _Router: Router
    ) { }

    adicionar() {
      this.service.adicionar(this.usuario).subscribe(() => {
      this._Router.navigate(['login']);
    });
  }

}
