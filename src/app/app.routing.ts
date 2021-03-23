import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { ContatosAdicionarComponent } from './contatos/adicionar/adicionar';
import { ContatosAlterarComponent } from './contatos/alterar/alterar';
import { ContatosListarComponent } from './contatos/listar/listar';
import {HomeComponent} from './home/home.component';
import {LoginComponent} from './seguranca/login/login.component';
import {NovoUsuarioComponent} from './usuarios/novo/novo.usuario.component';


const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full'},
  { path: 'home',      component: HomeComponent      },
  { path: 'login',      component: LoginComponent      },
  { path: 'novo-usuario',      component: NovoUsuarioComponent      },
  { path: 'contatos-listar',      component: ContatosListarComponent      },
  { path: 'contatos-adicionar',   component: ContatosAdicionarComponent   },
  { path: 'contatos-alterar/:id',     component: ContatosAlterarComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRouting { }
