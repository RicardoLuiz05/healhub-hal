import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DecorationsModule } from '../decorations/decorations.module';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';

import { CadastrarUsuarioComponent } from './cadastrar-usuario/cadastrar-usuario.component';
import { ConfiguracaoUsuarioComponent } from './configuracao-usuario/configuracao-usuario.component';




@NgModule({
  declarations: [
    CadastrarUsuarioComponent,
    ConfiguracaoUsuarioComponent,

  ],
  imports: [
    CommonModule,
    MatIconModule,
    MatButtonModule,
    DecorationsModule
  ]
})
export class UsuarioModule { }
