import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Contatos } from '../contatos.models';
import { ContatosService } from '../contatos.service';

@Component({
  selector: 'contatos-adicionar',
  templateUrl: './adicionar.html'
})
export class ContatosAdicionarComponent implements OnInit {

  contato = {} as Contatos;
  msg:String;

  constructor(
    private service: ContatosService,
    private _Router: Router
    ) { }

  ngOnInit(): void {
  }

  adicionar() {
    this.service.adicionar(this.contato).subscribe(() => {
      this._Router.navigate(['contatos-listar']);
    });
  }
}
