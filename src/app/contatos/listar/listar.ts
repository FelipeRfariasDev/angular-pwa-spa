import { Component, OnInit } from '@angular/core';
import { Contatos } from '../contatos.models';
import { ContatosService } from '../contatos.service';

@Component({
  selector: 'contatos-listar',
  templateUrl: './listar.html'
})
export class ContatosListarComponent implements OnInit {

  contatos: Contatos[];

  constructor(private service: ContatosService) { }

  ngOnInit(): void {
    this.getContatos();
  }

  getContatos() {
    this.service.getContatos().subscribe((contatos: Contatos[]) => {
      this.contatos = contatos;
    });
  }

}
