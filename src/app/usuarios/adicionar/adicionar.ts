import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Usuarios } from '../usuarios.models';
import { UsuariosService } from '../usuarios.service';


@Component({
  selector: 'usuarios-adicionar',
  templateUrl: './adicionar.html'
})
export class UsuariosAdicionarComponent implements OnInit {

  usuario = {} as Usuarios;
  msg:String;

  constructor(
    private service: UsuariosService,
    private _Router: Router
    ) { }

  ngOnInit(): void {
  }

  adicionar() {
    this.service.adicionar(this.usuario).subscribe(() => {
      this.msg = "Adicionado com sucesso";
    });
  }
}
