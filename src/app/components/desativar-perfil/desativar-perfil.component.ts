import { Component, OnInit } from '@angular/core';
import { MedicoConsulta } from '../shared/model/MedicoConsulta';
import { ActivatedRoute, Router } from '@angular/router';
import { MedicoService } from '../shared/service/medico.service';
import { PacienteService } from '../shared/service/paciente.service';
import { PacienteConsulta } from '../shared/model/PacienteConsulta';
import { HttpErrorResponse } from '@angular/common/http';

@Component({
  selector: 'app-desativar-perfil',
  templateUrl: './desativar-perfil.component.html',
  styleUrl: './desativar-perfil.component.css'
})
export class DesativarPerfilComponent implements OnInit {

  public medico: MedicoConsulta = new MedicoConsulta();
  public paciente: PacienteConsulta = new PacienteConsulta();
  public isMedico: boolean;
  public isError: boolean = false;

  constructor(
    private router: Router,
    private route: ActivatedRoute,
    private medicoService: MedicoService,
    private pacienteService: PacienteService,
  ) {}

  ngOnInit(): void {
    this.route.url.subscribe(params => {
      if (params[1].path == 'medico') {
        this.medicoService.getMedicoById(parseInt(params[2].path)).subscribe(medico => {
          this.medico = medico;
          this.isMedico = true;
        });
      } else {
        this.pacienteService.getPacienteById(parseInt(params[2].path)).subscribe(paciente => {
          this.paciente = paciente;
          this.isMedico = false;
        });
      }
    });
  }

  public navigate(): void {
    this.router.navigate([this.isMedico ? 'medicos' : 'pacientes']);
  }

  public desativarPerfil(): void {
    if(this.isMedico) {
      this.medicoService.deletarMedico(this.medico.id).subscribe(
        () => this.navigate(),
        (httpError: HttpErrorResponse) => this.isError = true
      );
    } else {
      this.pacienteService.deletarPaciente(this.paciente.id).subscribe(
        () => this.navigate(),
        (httpError: HttpErrorResponse) => this.isError = true
      );
    }
  }

}
