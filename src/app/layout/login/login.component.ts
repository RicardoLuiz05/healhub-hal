import { Component, OnInit } from '@angular/core';
import { Usuario } from 'src/app/shared/modelo/usuario';
import { AuthenService } from 'src/app/shared/services/authen.service';
import { SnackBarComponent } from 'src/app/diaria/snack-bar/snack-bar.component';
import { UsuarioService } from 'src/app/shared/services/usuario.service';
import { Observable } from 'rxjs';
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
    selector: 'app-login',
    templateUrl: './login.component.html',
    styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
    hide = true;
    usuario: Usuario = { nome: '', senha: '' } as Usuario;
    usuarios: Usuario[] = [];
    mensagemSnackBar: string = "Bem-vindo à familia HealHub! 😊💜";
    durationInSeconds: number = 5;

    constructor(private _snackBar: MatSnackBar, private authenService: AuthenService, private usuarioService: UsuarioService) {
        this.usuario = new Usuario('','','',0,0);
        this.carregarUsuarios();
    }

    ngOnInit(): void {
    }

    carregarUsuarios() {
        this.usuarioService.listar().subscribe(
            usuarios => this.usuarios = usuarios
        );
    }

    login():void {
        this.authenService.login(this.usuario.nome, this.usuario.senha);
    }

    cadastrar():void {
        let operacao: Observable<any>;
        console.log(this.usuario)
        operacao = this.usuarioService.inserir(this.usuario);
    
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
