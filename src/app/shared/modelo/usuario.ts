import { Diaria } from "./diaria";

export class Usuario {

    id: number = 0;
    nome: string = '';
    senha: string = '';
    metaDAgua: number = 0;
    metros: number = 0;
    diarias: Diaria[] = [];

    construtor(id:number, nome:string, senha:string, metaDAgua:number, metros:number){
      this.id = id;
      this.nome = nome;
      this.senha = senha;
      this.metaDAgua = metaDAgua;
       this.metros = metros;
      }
  
  }

  