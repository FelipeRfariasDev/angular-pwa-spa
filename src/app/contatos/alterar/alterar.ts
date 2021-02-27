import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { NgForm } from '@angular/forms';
import { Contatos } from '../contatos.models';
import { ContatosService } from '../contatos.service';

@Component({
  selector: 'contatos-alterar',
  templateUrl: './alterar.html'
})
export class ContatosAlterarComponent implements OnInit {

  contato = {} as Contatos;
  msg:String;
  constructor(private service: ContatosService, private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.route.params.subscribe( parametros => {
      if (parametros.id) {
        this.service.getContatoById(parametros.id).subscribe((contato: Contatos) => {
          this.contato = contato;
        });
      }
    });
  }

  alterar(form: NgForm) {
    this.service.alterar(this.contato).subscribe(() => {
      this.msg="alterado com sucesso";
      location.href = "contatos-listar";
    });
  }
}
