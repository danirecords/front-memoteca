import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Pensamento } from '../pensamento';
import { PensamentoService } from '../pensamento.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-criar-pensamento',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './criar-pensamento.component.html',
  styleUrl: './criar-pensamento.component.css'
})
export class CriarPensamentoComponent {

  constructor(
    private service: PensamentoService,
    private router: Router) {}

  pensamento: Pensamento = {
    conteudo: '',
    autoria: '',
    modelo: ''
  }

  criarPensamento(){
    this.service.criar(this.pensamento).subscribe({
       next: () => this.router.navigate(['/listarPensamento']),
    })
  }

  cancelar(){
    this.router.navigate(['/listarPensamento'])
  }

}
