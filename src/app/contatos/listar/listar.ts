import { Component, OnInit } from '@angular/core';
import { Contatos } from '../contatos.models';
import { ContatosService } from '../contatos.service';

@Component({
  selector: 'contatos-listar',
  templateUrl: './listar.html'
})
export class ContatosListarComponent implements OnInit {

  contato = {} as Contatos;
  contatos: Contatos[];

  constructor(private service: ContatosService) { }

  ngOnInit(): void {
    this.getAll();
  }

  getAll() {
    this.service.getAll().subscribe((contatos: Contatos[]) => {
      this.contatos = contatos;
    });
  }

  excluir(contato: Contatos) {
    this.service.excluir(contato).subscribe(() => {
      this.getAll();
    });
  }

}
