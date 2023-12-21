import { Component, OnInit } from '@angular/core';
import { UsuarioService } from 'src/app/shared/services/usuario.service';
import { GuardianUserService } from 'src/app/shared/services/guardian-user.service';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Observable } from 'rxjs';
import { SnackBarComponent } from 'src/app/diaria/snack-bar/snack-bar.component';
import { Usuario } from 'src/app/shared/modelo/usuario';

@Component({
  selector: 'app-metas',
  templateUrl: './metas.component.html',
  styleUrls: ['./metas.component.css']
})
export class MetasComponent implements OnInit {
  usuario: Usuario = new Usuario('', '', '', 0, 0);
  metaDAgua: number = 0;
  metros: number = 0;
  mensagemSnackBar: string = "Metas atualizadas! Boa sorte! 😊💜";
  durationInSeconds: number = 5;

  constructor(
    private usuarioService: UsuarioService,
    private guardianUserService: GuardianUserService,
    private _snackBar: MatSnackBar
  ) {}

  ngOnInit(): void {
    this.usuario = this.guardianUserService.getUsuario();
  }

  atualizarMetaDAgua(): void {
    this.usuario.metaDAgua = this.metaDAgua;
    this.atualizarMetas();
  }

  atualizarMetros(): void {
    this.usuario.metros = this.metros;
    this.atualizarMetas();
  }

  private atualizarMetas(): void {
    this.usuarioService.atualizar(this.usuario).subscribe(
      () => {
        this._snackBar.openFromComponent(SnackBarComponent, {
          data: { mensagem: this.mensagemSnackBar },
          duration: this.durationInSeconds * 1000
        });
      }
    );
  }
}
