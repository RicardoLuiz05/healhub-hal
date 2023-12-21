import { Usuario } from "./usuario";

export class Diaria {

  id: number = 0;
  dataDia: string = '';
  emocao: string = '';
  coposDAgua: number = 0;
  exercicios: string = '';
  adicional?: string = '';
  usuario: Usuario | null = null;

}