import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { ServiceWorkerModule } from '@angular/service-worker';
import { environment } from '../environments/environment';

import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';

import { AppRouting } from './app.routing';

import { AppLayout } from './layout/app.layout';

import { ContatosService } from './contatos/contatos.service';
import { ContatosListarComponent } from './contatos/listar/listar';
import { ContatosAdicionarComponent } from './contatos/adicionar/adicionar';
import { ContatosAlterarComponent } from './contatos/alterar/alterar';
import { UsuariosAdicionarComponent } from './usuarios/adicionar/adicionar';
import { UsuariosLoginComponent } from './usuarios/login/login';
import { AutenticacaoComponent } from './usuarios/autenticacao/autenticacao';
import {HomeComponent} from './home/home';
import { UsuariosLogoutComponent } from './usuarios/logout/logout';

@NgModule({
  declarations: [
    AppLayout,
    ContatosListarComponent,
    ContatosAdicionarComponent,
    ContatosAlterarComponent,
    UsuariosAdicionarComponent,
    UsuariosLoginComponent,
    AutenticacaoComponent,
    HomeComponent,
    UsuariosLogoutComponent
  ],
  imports: [
    BrowserModule,
    AppRouting,
    HttpClientModule,
    FormsModule,
    ServiceWorkerModule.register('ngsw-worker.js', { enabled: environment.production })
  ],
  providers: [ContatosService],
  bootstrap: [AppLayout]
})
export class AppModule { }
