import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { CadastroDiariaComponent } from './diaria/cadastro-diaria/cadastro-diaria.component';
import { ListagemDiariaComponent } from './diaria/listagem-diaria/listagem-diaria.component';
import { TabelaComponent } from './diaria/tabela/tabela.component';
import { TelaPrincipalComponent } from './layout/tela-principal/tela-principal.component';
import { LoginComponent } from './layout/login/login.component';
import { InicioComponent } from './diaria/inicio/inicio.component';
import { AuthGuard } from './auth.guard';

const routes: Routes = [
  {
    path: 'telaprincipal/cadastrodiaria',
    component: CadastroDiariaComponent,
    canActivate: [AuthGuard]
  },
  {
    path: 'telaprincipal/editadiaria/:id',
    component: CadastroDiariaComponent,
    canActivate: [AuthGuard]
  },
  {
    path: 'telaprincipal/listagemdiaria',
    component: ListagemDiariaComponent,
    canActivate: [AuthGuard]
  },
  {
    path: 'telaprincipal/tabeladiaria',
    component: TabelaComponent,
    canActivate: [AuthGuard]
  },
  {
    path: 'telaprincipal',
    component: TelaPrincipalComponent,
    canActivate: [AuthGuard]
  },
  {
    path: 'login',
    component: LoginComponent
  },
  {
    path: '',
    redirectTo: '/login',
    pathMatch: 'full'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
