import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Usuario } from '../modelo/usuario';
import { UsuarioService } from './usuario.service';
import { GuardianUserService } from './guardian-user.service';
import { MatSnackBar } from '@angular/material/snack-bar';

@Injectable({
  providedIn: 'root'
})
export class AuthenService {
  private isAuthenticated = false;

  constructor(private _snackBar: MatSnackBar,
    private router: Router,
     private usuarioService: UsuarioService,
      private guardianUserService: GuardianUserService) {
  }

  login(nome: string, senha: string): void {
    this.usuarioService.listar().subscribe(
      (usuarios: Usuario[]) => {
        const usuario = usuarios.find(u => u.nome === nome);

        if (usuario && usuario.senha === senha) {
          this.guardianUserService.setUsuario(usuario);
          this.isAuthenticated = true;
          this.router.navigate(['/telaprincipal']);
        } else {
          this._snackBar.open('Login inválido', 'Fechar', { duration: 5000 });
        }
      },
      error => {
        console.log("Erro ao obter lista de usuários:", error);
      }
    );
  }


  logout(): void {
    this.isAuthenticated = false;
    this.router.navigate(['/login']);
  }

  isAuthenticatedUser(): boolean {
    return this.isAuthenticated;
  }

 }
