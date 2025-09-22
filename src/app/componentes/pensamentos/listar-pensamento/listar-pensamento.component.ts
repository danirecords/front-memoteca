import { Component, OnInit } from '@angular/core';
import { RouterLink } from "@angular/router";
import { PensamentoComponent } from "../pensamento/pensamento.component";

@Component({
  selector: 'app-listar-pensamento',
  standalone: true,
  imports: [RouterLink, PensamentoComponent],
  templateUrl: './listar-pensamento.component.html',
  styleUrl: './listar-pensamento.component.css'
})

export class ListarPensamentoComponent implements OnInit {

  listaPensamentos = [];
  constructor() { }

  ngOnInit(): void {

  }

}
