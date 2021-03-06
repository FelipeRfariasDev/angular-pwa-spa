import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { ContatosAdicionarComponent } from './contatos/adicionar/adicionar';
import { ContatosAlterarComponent } from './contatos/alterar/alterar';
import { ContatosListarComponent } from './contatos/listar/listar';
import { UsuariosAdicionarComponent } from './usuarios/adicionar/adicionar';
import { UsuariosLoginComponent } from './usuarios/login/login';


const routes: Routes = [
  { path: '', redirectTo: 'usuarios-login', pathMatch: 'full'},
  { path: 'contatos-listar',      component: ContatosListarComponent    },
  { path: 'contatos-adicionar',   component: ContatosAdicionarComponent },
  { path: 'contatos-alterar/:id', component: ContatosAlterarComponent   },
  { path: 'usuarios-adicionar',   component: UsuariosAdicionarComponent },
  { path: 'usuarios-login',       component: UsuariosLoginComponent     },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRouting { }
