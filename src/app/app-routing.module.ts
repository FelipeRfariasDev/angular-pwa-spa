import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { ContatosAdicionarComponent } from './contatos/adicionar/adicionar';
import { ContatosAlterarComponent } from './contatos/alterar/alterar';
import { ContatosExcluirComponent } from './contatos/excluir/excluir';
import { ContatosListarComponent } from './contatos/listar/listar';

const routes: Routes = [
  { path: 'contatos-listar',      component: ContatosListarComponent      },
  { path: 'contatos-adicionar',   component: ContatosAdicionarComponent   },
  { path: 'contatos-excluir',     component: ContatosExcluirComponent     },
  { path: 'contatos-alterar',     component: ContatosAlterarComponent     }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
