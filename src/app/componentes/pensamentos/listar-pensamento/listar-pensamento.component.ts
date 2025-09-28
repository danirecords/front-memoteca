import { Component, OnInit } from '@angular/core';
import { RouterLink } from "@angular/router";
import { PensamentoComponent } from "../pensamento/pensamento.component";
import { NgForOf } from '@angular/common';

@Component({
  selector: 'app-listar-pensamento',
  standalone: true,
  imports: [RouterLink, PensamentoComponent, NgForOf],
  templateUrl: './listar-pensamento.component.html',
  styleUrl: './listar-pensamento.component.css'
})

export class ListarPensamentoComponent implements OnInit {

   listaPensamentos = [
      {
        conteudo: 'Comunicação entre componentes',
        autoria: 'Angular',
        modelo: 'modelo3'
      },
      {
        conteudo: 'Comunicação entre componentes 2',
        autoria: 'Angular 2',
        modelo: 'modelo2'
      },
      {
        conteudo: 'O treinador também destacou o momento vivido por Philippe Coutinho - substituído no segundo tempo aos gritos de "Coutinho é Seleção" da arquibancada. Na opinião de Diniz, o meia tem entrado no radar do técnico Carlo Ancelotti e contrariado as expectativas à medida que envelhece.',
        autoria: 'Angular 2',
        modelo: 'modelo1'
      }
  ];
  constructor() { }

  ngOnInit(): void {

  }

}
