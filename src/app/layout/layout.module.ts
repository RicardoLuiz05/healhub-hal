import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatButtonModule} from '@angular/material/button';
import {MatCardModule} from '@angular/material/card';
import {MatInputModule} from '@angular/material/input';
import {MatIconModule} from '@angular/material/icon';
import {MatBadgeModule} from '@angular/material/badge';
import {MatMenuModule} from '@angular/material/menu';
import {RouterLink} from '@angular/router';
import { DiariaModule } from '../diaria/diaria.module';
import { LoginComponent } from './login/login.component';
import { TelaPrincipalComponent } from './tela-principal/tela-principal.component';
import { AppRoutingModule } from '../app-routing.module';
import { FormsModule } from '@angular/forms';
import { DecorationsModule } from '../decorations/decorations.module';
import { MetasComponent } from './metas/metas.component';

@NgModule({
  declarations: [
    LoginComponent,
    TelaPrincipalComponent,
    MetasComponent
  ],
  imports: [
    CommonModule,
    BrowserAnimationsModule,
    MatFormFieldModule,
    MatButtonModule,
    MatCardModule,
    MatInputModule,
    MatIconModule,
    MatBadgeModule,
    MatMenuModule,
    RouterLink,
    DiariaModule,
    AppRoutingModule,
    FormsModule,
    DecorationsModule,
    
  ],
  exports: [
    LoginComponent,
    TelaPrincipalComponent,
    MetasComponent
  ]
})
export class LayoutModule { }