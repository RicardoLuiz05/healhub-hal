import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DecorationsModule } from '../decorations/decorations.module';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';

import { CadastrarUsuarioComponent } from './cadastrar-usuario/cadastrar-usuario.component';
import { ConfiguracaoUsuarioComponent } from './configuracao-usuario/configuracao-usuario.component';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatCardModule } from '@angular/material/card';
import { FormsModule } from '@angular/forms';




@NgModule({
  declarations: [
    CadastrarUsuarioComponent,
    ConfiguracaoUsuarioComponent,

  ],
  imports: [
    CommonModule,
    MatIconModule,
    MatButtonModule,
    DecorationsModule,
    MatFormFieldModule,
    MatCardModule,
    FormsModule
  ]
})
export class UsuarioModule { }
