import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { ContatosAdicionarComponent } from './adicionar/adicionar';
import { ContatosAlterarComponent } from './alterar/alterar';
import { ContatosListarComponent } from './listar/listar';


const routes: Routes = [
  { path: '', redirectTo: '/contatos-listar', pathMatch: 'full'},
  { path: 'contatos-listar',      component: ContatosListarComponent      },
  { path: 'contatos-adicionar',   component: ContatosAdicionarComponent   },
  { path: 'contatos-alterar/:id',     component: ContatosAlterarComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class ContatosRouting { }
