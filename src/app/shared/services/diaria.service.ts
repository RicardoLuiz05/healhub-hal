
import {Injectable} from '@angular/core';
import {Diaria} from '../modelo/diaria';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import { Usuario } from '../modelo/usuario';

@Injectable({
  providedIn: 'root'
})
export class DiariaService {


  URL_DIARIAS = 'http://localhost:8081/diarias';
  // URL_DIARIAS = 'http://localhost:3000/diarias';

  constructor(private httpClient: HttpClient) {
  }

  listar(): Observable<Diaria[]> {
    return this.httpClient.get<Diaria[]>(this.URL_DIARIAS);
  }

  inserir(diaria: Diaria): Observable<Diaria> {
    return this.httpClient.post<Diaria>(this.URL_DIARIAS, diaria);
  }

  remover(id: number): Observable<object> {
    return this.httpClient.delete(`${this.URL_DIARIAS}/${id}`);
  }

  pesquisarPorId(id: number): Observable<Diaria> {
    return this.httpClient.get<Diaria>(`${this.URL_DIARIAS}/${id}`);
  }

  atualizar(diaria: Diaria): Observable<Diaria> {
    return this.httpClient.put<Diaria>(`${this.URL_DIARIAS}/${diaria.id}`, diaria);
  }

  associarUsuarioDiaria(diariaId: number, usuario: Usuario): Observable<any> {
    console.log(usuario.id);
    const url = `${this.URL_DIARIAS}/${diariaId}/usuario`;
    // return this.httpClient.post<Diaria>(url, usuario);
  }
  
  
}