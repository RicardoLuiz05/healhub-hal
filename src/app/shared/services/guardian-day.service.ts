import { Injectable } from '@angular/core';
import { Diaria } from '../modelo/diaria';
import { DiariaService } from './diaria.service';

@Injectable({
  providedIn: 'root'
})
export class GuardianDayService {
  private diaria:Diaria;
  constructor(private http:DiariaService) {
    this.diaria = new Diaria;
   }

  setDiaria(diaria: Diaria){
    this.diaria= diaria;
  }

  getDiaria():Diaria{
    return this.diaria
  }
}
