import { Component } from '@angular/core';
import { Diaria } from 'src/app/shared/modelo/diaria';
import { Usuario } from 'src/app/shared/modelo/usuario';
import { GuardianDayService } from 'src/app/shared/services/guardian-day.service';
import { GuardianUserService } from 'src/app/shared/services/guardian-user.service';

@Component({
  selector: 'app-inicio',
  templateUrl: './inicio.component.html',
  styleUrls: ['./inicio.component.css'],
})
export class InicioComponent {
  usuario: Usuario = new Usuario('','','', 0, 0);
  diaria: Diaria = new Diaria;
  metros: number;
  meta: number;
  copos: number;

  constructor(private guardianUserService: GuardianUserService, private guardianDayService: GuardianDayService){
    this.usuario = this.guardianUserService.getUsuario();
    this.diaria = this.guardianDayService.getDiaria();
    this.metros = this.usuario.metros;
    this.meta = this.usuario.metaDAgua;
    this.copos = this.diaria.coposDAgua;
  }

  calcularPorcentagem(): number {
    return (this.copos / this.meta) * 100;
  }
}

