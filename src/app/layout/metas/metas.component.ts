import { Component, OnInit } from '@angular/core';
import { Usuario } from 'src/app/shared/modelo/usuario';
import { UsuarioService } from 'src/app/shared/services/usuario.service';
import { GuardianUserService } from 'src/app/shared/services/guardian-user.service';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Observable } from 'rxjs';
import { SnackBarComponent } from 'src/app/diaria/snack-bar/snack-bar.component';

@Component({
  selector: 'app-metas',
  templateUrl: './metas.component.html',
  styleUrls: ['./metas.component.css']
})
export class MetasComponent implements OnInit {
  usuario: Usuario = new Usuario('','','', 0, 0);
  operacao: Observable<any>;
  mensagemSnackBar: string = "Metas atualizadas! Boa sorte! 😊💜";
  durationInSeconds: number = 5;

  constructor(
    private usuarioService: UsuarioService,
    private guardianUserService: GuardianUserService,
    private _snackBar: MatSnackBar
  ) {
    this.operacao = new Observable<any>();
  }

  ngOnInit(): void {
    this.usuario = this.guardianUserService.getUsuario();
  }

  atualizarMeta(): void {
    
   this.operacao = this.usuarioService.atualizar(this.usuario);

   this.operacao.subscribe(
    () => {
        this._snackBar.openFromComponent(SnackBarComponent, {
        data: {mensagem: this.mensagemSnackBar},
        duration: this.durationInSeconds * 1000
        });
    }
);
  }
  atualizarMetro(): void {
    this.operacao = this.usuarioService.atualizar(this.usuario);

    this.operacao.subscribe(
     () => {
         this._snackBar.openFromComponent(SnackBarComponent, {
         data: {mensagem: this.mensagemSnackBar},
         duration: this.durationInSeconds * 1000
         });
     }
  );}
}
