import { Component, Input } from '@angular/core';
import { ConsultaConsulta } from '../shared/model/ConsultaConsulta';
import { PacienteConsulta } from '../shared/model/PacienteConsulta';
import { MedicoConsulta } from '../shared/model/MedicoConsulta';
import { Router } from '@angular/router';

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrl: './details.component.css'
})
export class DetailsComponent {

  @Input() consulta: ConsultaConsulta;
  @Input() paciente: PacienteConsulta;
  @Input() medico: MedicoConsulta;
  public isExtend: boolean = false;
  public today: Date = new Date(Date.now());
  public todayFormatted: string | null;

  constructor(
    private router: Router
  ) {}

  public navigate(path: string): void {
    this.router.navigate([path]);
  }

  public onChangeExtend(): void {
    this.isExtend = !this.isExtend;
  }
}
