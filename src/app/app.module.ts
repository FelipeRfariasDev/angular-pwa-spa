import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { ServiceWorkerModule } from '@angular/service-worker';
import { environment } from '../environments/environment';

import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';

import { AppLayout } from './layout/app.layout';
import { MenuComponent } from './menu/menu';
import { ContatosListarComponent } from './contatos/listar/listar';
import { ContatosAdicionarComponent } from './contatos/adicionar/adicionar';
import { ContatosAlterarComponent } from './contatos/alterar/alterar';

import { ContatosService } from './contatos/contatos.service';


@NgModule({
  declarations: [
    AppLayout,
    MenuComponent,
    ContatosListarComponent,
    ContatosAdicionarComponent,
    ContatosAlterarComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ServiceWorkerModule.register('ngsw-worker.js', { enabled: environment.production })
  ],
  providers: [ContatosService],
  bootstrap: [AppLayout]
})
export class AppModule { }
