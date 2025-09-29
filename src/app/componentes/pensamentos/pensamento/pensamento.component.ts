import { Component, Input, OnInit } from '@angular/core';
import { Pensamento } from '../pensamento';

@Component({
  selector: 'app-pensamento',
  standalone: true,
  imports: [],
  templateUrl: './pensamento.component.html',
  styleUrl: './pensamento.component.css'
})

export class PensamentoComponent implements OnInit {

  @Input() pensamento: Pensamento = {
    id: 0,
    conteudo: 'I Love angular',
    autoria: 'Nay',
    modelo: 'modelo3'
  }

  constructor() { }

  ngOnInit(): void {

  }

  larguraPensamento(): string {
    if(this.pensamento.conteudo.length >= 259){
      return 'pensamento-g'
    }
    return 'pensamento-p'
  }

}
