import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Pensamento } from '../pensamento';

@Component({
  selector: 'app-criar-pensamento',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './criar-pensamento.component.html',
  styleUrl: './criar-pensamento.component.css'
})
export class CriarPensamentoComponent {

  pensamento: Pensamento = {
    id: 1,
    conteudo: 'Aprendendo angular',
    autoria: 'Dev',
    modelo: 'modelo1'
  }

  criarPensamento(){
    alert('Novo pensamento criado!')
  }

  cancelar(){
    alert('Cancelar pensamento!')
  }

}
