import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { ContatosRouting } from './contatos.routing';
import { ServiceWorkerModule } from '@angular/service-worker';
import { environment } from '../../environments/environment';

import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';

import { AppLayout } from '../layout/app.layout';
import { ContatosListarComponent } from './listar/listar';
import { ContatosAdicionarComponent } from './adicionar/adicionar';
import { ContatosAlterarComponent } from './alterar/alterar';

import { ContatosService } from './contatos.service';


@NgModule({
  declarations: [
    AppLayout,
    ContatosListarComponent,
    ContatosAdicionarComponent,
    ContatosAlterarComponent
  ],
  imports: [
    BrowserModule,
    ContatosRouting,
    HttpClientModule,
    FormsModule,
    ServiceWorkerModule.register('ngsw-worker.js', { enabled: environment.production })
  ],
  providers: [ContatosService],
  bootstrap: [AppLayout]
})
export class ContatosModule { }
