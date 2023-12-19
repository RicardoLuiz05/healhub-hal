import { Component, OnInit } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { SnackBarComponent } from 'src/app/diaria/snack-bar/snack-bar.component';
import { Usuario } from 'src/app/shared/modelo/usuario';
import { UsuarioService } from 'src/app/shared/services/usuario.service';

@Component({
  selector: 'app-cadastrar-usuario',
  templateUrl: './cadastrar-usuario.component.html',
  styleUrls: ['./cadastrar-usuario.component.css']
})
export class CadastrarUsuarioComponent implements OnInit {

  usuario: Usuario
  durationInSeconds: number = 5;
  usuarios: Usuario[] = [];

  mensagemSnackBar: string = "Bem-vindo à familia HealHube! 😊💜";

  constructor( private _snackBar: MatSnackBar, private usuarioService: UsuarioService, private roteador: Router){
    this.usuario = new Usuario();
    this.carregarUsuarios();
  }

  ngOnInit(): void {
  }

  carregarUsuarios() {
    this.usuarioService.listar().subscribe(
      usuarios => this.usuarios = usuarios
    );
  }

  inserirUsuario(): void {
    let operacao: Observable<any>;
    operacao = this.usuarioService.inserir(this.usuario);
    
    this.roteador.navigate(['/login']);
  
    operacao.subscribe(
      () => {
        this._snackBar.openFromComponent(SnackBarComponent, {
          data: {mensagem: this.mensagemSnackBar},
          duration: this.durationInSeconds * 1000
        });
      }
    );
  }
}
