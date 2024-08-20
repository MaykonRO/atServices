import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CursoService {
  nome !: string;
  inicio !: number;
  duracao !: number;
  valor !: number;

  constructor() { }

  setNome(value : string){
    this.nome=value;
  }
  setInicio(value : number){
    this.inicio=value;
  }
  setDuracao(value : number){
    this.duracao=value;
  }
  setValor(value : number){
    this.valor=value;
  }

  
}
