import { Component } from '@angular/core';
import { Usuario } from 'src/app/shared/modelo/usuario';
import { GuardianUserService } from 'src/app/shared/services/guardian-user.service';

@Component({
  selector: 'app-inicio',
  templateUrl: './inicio.component.html',
  styleUrls: ['./inicio.component.css'],
})
export class InicioComponent {
  usuario: Usuario = new Usuario('','','', 0, 0);
  metros: Number;
  meta: Number;

  constructor(private guardianUserService: GuardianUserService){
    this.usuario = this.guardianUserService.getUsuario();
    this.metros = this.usuario.metros;
    this.meta = this.usuario.metaDAgua;
  }
}

