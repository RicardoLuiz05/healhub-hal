import { Component } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { SnackBarComponent } from 'src/app/diaria/snack-bar/snack-bar.component';
import { Usuario } from 'src/app/shared/modelo/usuario';
import { AuthenService } from 'src/app/shared/services/authen.service';
import { GuardianUserService } from 'src/app/shared/services/guardian-user.service';
import { UsuarioService } from 'src/app/shared/services/usuario.service';

@Component({
  selector: 'app-configuracao-usuario',
  templateUrl: './configuracao-usuario.component.html',
  styleUrls: ['./configuracao-usuario.component.css']
})
export class ConfiguracaoUsuarioComponent {
  hide = true;
  usuario: Usuario;
  durationInSeconds: number = 5;
  mensagemSnackBar: string = "Metas atualizadas! 😊💜";

  constructor(
      private authenService: AuthenService,
      private _snackBar: MatSnackBar,
      private usuarioService: UsuarioService,
      private guardianUserService: GuardianUserService
      ) {

    this.usuario = this.guardianUserService.getUsuario();
  }
  

  atualizar(): void{
      let operacao: Observable<any>;
      operacao = this.usuarioService.atualizar(this.usuario);
    
      operacao.subscribe(
        () => {
          this._snackBar.openFromComponent(SnackBarComponent, {
            data: {mensagem: this.mensagemSnackBar},
            duration: this.durationInSeconds * 1000
          });
        },
        (error) => {
          console.error('Erro ao atualizar usuário:', error);
        }
      );

  }

  deslogar():void {
    this.authenService.logout();
  }
}
