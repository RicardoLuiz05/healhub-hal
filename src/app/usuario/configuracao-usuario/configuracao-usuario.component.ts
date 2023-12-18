import { Component } from '@angular/core';
import { AuthenService } from 'src/app/shared/services/authen.service';

@Component({
  selector: 'app-configuracao-usuario',
  templateUrl: './configuracao-usuario.component.html',
  styleUrls: ['./configuracao-usuario.component.css']
})
export class ConfiguracaoUsuarioComponent {

  constructor(private authenService: AuthenService) {
  }

  deslogar():void {
    this.authenService.logout();
  }
}
