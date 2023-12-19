import { Injectable } from '@angular/core';
import { Usuario } from '../modelo/usuario';
import { UsuarioService } from './usuario.service';


@Injectable({
  providedIn: 'root'
})
export class GuardianUserService {
  private usario:Usuario;
  constructor(private http:UsuarioService) {
    this.usario = new Usuario('','','',0,0);
    
  }

  setUsuario(usuario: Usuario){
    this.usario = usuario;
  }

  getUsuario():Usuario{
    return this.usario
  }
}

