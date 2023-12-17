import { Component } from '@angular/core';
import { Usuario } from 'src/app/shared/modelo/usuario';
import { AuthenService } from 'src/app/shared/services/authen.service';

@Component({
    selector: 'app-login',
    templateUrl: './login.component.html',
    styleUrls: ['./login.component.css']
})
export class LoginComponent {
    hide = true;
    usuario: Usuario = { nome: '', senha: '' } as Usuario;

    constructor(private authenService: AuthenService) {
    }

    login():void {
        this.authenService.login(this.usuario.nome, this.usuario.senha);
    }

}
