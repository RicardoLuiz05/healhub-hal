import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Usuario } from '../modelo/usuario';
import { Observable, catchError } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UsuarioService {

  URL = 'http://localhost:8081/usuarios';
  // URL = 'http://localhost:3000/usuarios';

  constructor(private httpClient: HttpClient) { }

  listar(): Observable<Usuario[]> {
    return this.httpClient.get<Usuario[]>(this.URL);
  }

  inserir(usuario: Usuario): Observable<Usuario> {
    return this.httpClient.post<Usuario>(this.URL, usuario);
  }

  remover(id: string): Observable<object> {
    const idNumber: number = Number(id); // Use Number para converter a string para um número
    console.log(idNumber);
    return this.httpClient.delete(`${this.URL}/${idNumber}`).pipe(
      catchError((error) => {
        console.error('Erro ao remover usuário:', error);
        throw error; 
      })
    );
  }

  pesquisarPorId(id: string): Observable<Usuario> {
    return this.httpClient.get<Usuario>(`${this.URL}/${id}`);
  }

  pesquisarPorNome(nome: string): Observable<Usuario> {
    return this.httpClient.get<Usuario>(`${this.URL}/${nome}`);
  }

  atualizar(usuario: Usuario): Observable<Usuario> {
    return this.httpClient.put<Usuario>(`${this.URL}/${usuario.id}`, usuario);
  }
}
