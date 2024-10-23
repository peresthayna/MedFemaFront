import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-campo-erro',
  templateUrl: './campo-erro.component.html',
  styleUrl: './campo-erro.component.css'
})
export class CampoErroComponent {
  @Input() mostrarErro: boolean = false;
}
