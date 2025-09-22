import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-pensamento',
  standalone: true,
  imports: [],
  templateUrl: './pensamento.component.html',
  styleUrl: './pensamento.component.css'
})

export class PensamentoComponent implements OnInit {

  pensamento = {
    conteudo: 'I Love angular',
    autoria: 'Nay',
    modelo: 'modelo3'
  }

  constructor() { }

  ngOnInit(): void {

  }

}
