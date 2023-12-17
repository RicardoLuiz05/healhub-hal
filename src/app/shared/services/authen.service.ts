import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Usuario } from '../modelo/usuario';
import { UsuarioService } from './usuario.service';

@Injectable({
  providedIn: 'root'
})
export class AuthenService {
  private isAuthenticated = false;
  private usuarios: Usuario[] = [];

  constructor(private router: Router, private usuarioService: UsuarioService) {
    this.usuarioService.listar().subscribe(
      (usuarios: Usuario[]) => {
        this.usuarios = usuarios;
      },
      error => {
        console.log("Erro ao obter lista de usuários:", error);
      }
    );
  }

  login(nome: string, senha: string): void {
    const usuario = this.usuarios.find(u => u.nome === nome);

    if (usuario) {
      if (usuario.senha === senha) {
        this.isAuthenticated = true;
        this.router.navigate(['/telaprincipal']);
      } else {
        console.log("Erro na senha");
      }
    } else {
      console.log("Erro no usuário");
    }
  }

  logout(): void {
    this.isAuthenticated = false;
    this.router.navigate(['/login']);
  }

  isAuthenticatedUser(): boolean {
    return this.isAuthenticated;
  }
}
