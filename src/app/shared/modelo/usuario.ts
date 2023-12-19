import { Diaria } from "./diaria";

export class Usuario {

    id: string = '';
    nome: string = '';
    senha: string = '';
    metaDAgua: number = 0;
    metros: number = 0;
    diarias: Diaria[] = [];

    constructor(id: string, nome: string, senha: string, metaDAgua: number, metros: number) {
        this.id = id;
        this.nome = nome;
        this.senha = senha;
        this.metaDAgua = metaDAgua;
        this.metros = metros;
    }

}
