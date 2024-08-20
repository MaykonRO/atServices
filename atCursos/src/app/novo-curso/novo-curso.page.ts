import { Component, OnInit } from '@angular/core';
import { CursoService } from '../service/curso.service';

@Component({
  selector: 'app-novo-curso',
  templateUrl: './novo-curso.page.html',
  styleUrls: ['./novo-curso.page.scss'],
})
export class NovoCursoPage implements OnInit {

  /* declarando as variaveis */
  txt_nome:string = "";
  txt_inicio:number = 0;
  txt_duracao:number = 0;
  txt_valor:number = 0;

  vw_nome:string = "";
  vw_inicio:number = 0;
  vw_duracao:number = 0;
  vw_valor:number = 0;

  card:string="";
  
  constructor(
    private curso : CursoService
  ) {}

  guardarForm(txt_nome : string, txt_inicio : number, txt_duracao : number, txt_valor : number){
    this.curso.setNome(txt_nome);
    this.curso.setInicio(txt_inicio);
    this.curso.setDuracao(txt_duracao);
    this.curso.setValor(txt_valor);

    this.vw_nome += this.curso.nome;
    this.vw_inicio += this.curso.inicio;
    this.vw_duracao += this.curso.duracao;
    this.vw_valor += this.curso.valor;
  }

  

  ngOnInit() {
    
  }
}
