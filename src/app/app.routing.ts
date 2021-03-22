import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { ContatosAdicionarComponent } from './contatos/adicionar/adicionar';
import { ContatosAlterarComponent } from './contatos/alterar/alterar';
import { ContatosListarComponent } from './contatos/listar/listar';
import { HomeComponent } from './home/home';
import { UsuariosAdicionarComponent } from './usuarios/adicionar/adicionar';
import { UsuariosLoginComponent } from './usuarios/login/login';
import { UsuariosLogoutComponent } from './usuarios/logout/logout';


const routes: Routes = [
      { path: '',      component: HomeComponent    },
      { path: 'contatos-adicionar',      component: ContatosAdicionarComponent    },
      { path: 'contatos-listar',   component: ContatosListarComponent },
      { path: 'contatos-adicionar',   component: ContatosAdicionarComponent },
      { path: 'contatos-alterar/:id', component: ContatosAlterarComponent   },
      { path: 'usuarios-adicionar',   component: UsuariosAdicionarComponent },
      { path: 'usuarios-login',       component: UsuariosLoginComponent     },
      { path: 'usuarios-logout',       component: UsuariosLogoutComponent    },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRouting { }
