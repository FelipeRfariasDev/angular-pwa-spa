import { Component, OnInit } from '@angular/core';
import { Contatos } from '../contatos.models';
import { ContatosService } from '../contatos.service';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'contatos-adicionar',
  templateUrl: './adicionar.html'
})
export class ContatosAdicionarComponent implements OnInit {

  contato = {} as Contatos;

  constructor(private service: ContatosService) { }

  ngOnInit(): void {
  }

  adicionar(form: NgForm) {
    this.service.adicionar(this.contato).subscribe(() => {
      form.resetForm();
    });
  }
}
