import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { ServiceWorkerModule } from '@angular/service-worker';
import { environment } from '../environments/environment';

import { AppComponent } from './app.component';
import { ContatosListarComponent } from './contatos/listar/listar';
import { ContatosAdicionarComponent } from './contatos/adicionar/adicionar';
import { ContatosExcluirComponent } from './contatos/excluir/excluir';
import { ContatosAlterarComponent } from './contatos/alterar/alterar';


@NgModule({
  declarations: [
    AppComponent,
    ContatosListarComponent,
    ContatosAdicionarComponent,
    ContatosExcluirComponent,
    ContatosAlterarComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ServiceWorkerModule.register('ngsw-worker.js', { enabled: environment.production })
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
