import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRouting } from './app.routing';
import { ServiceWorkerModule } from '@angular/service-worker';
import { environment } from '../environments/environment';

import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';

import { AppLayout } from './layout/app.layout';
import { ContatosListarComponent } from './contatos/listar/listar';
import { ContatosAdicionarComponent } from './contatos/adicionar/adicionar';
import { ContatosAlterarComponent } from './contatos/alterar/alterar';

import { ContatosService } from './contatos/contatos.service';
import {HomeComponent} from './home/home.component';
import {LoginComponent} from './seguranca/login/login.component';
import {LogoutComponent} from './seguranca/logout/logout.component';
import {NovoUsuarioComponent} from './usuarios/novo/novo.usuario.component';


@NgModule({
  declarations: [
    AppLayout,
    ContatosListarComponent,
    ContatosAdicionarComponent,
    ContatosAlterarComponent,
    HomeComponent,
    LoginComponent,
    LogoutComponent,
    NovoUsuarioComponent
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
