import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Contatos } from '../contatos.models';
import { ContatosService } from '../contatos.service';

@Component({
  selector: 'contatos-alterar',
  templateUrl: './alterar.html'
})
export class ContatosAlterarComponent implements OnInit {

  contato = {} as Contatos;
  msg:String;

  constructor(
    private _Service: ContatosService, 
    private _ActivatedRoute: ActivatedRoute,
    private _Router: Router
    ) { }

  ngOnInit(): void {
    this._ActivatedRoute.params.subscribe( parametros => {
      if (parametros.id) {
        this._Service.getContatoById(parametros.id).subscribe((contato: Contatos) => {
          this.contato = contato;
        });
      }
    });
  }

  alterar() {
    this._Service.alterar(this.contato).subscribe(() => {
      this._Router.navigate(['contatos-listar']);
    });
  }
}
