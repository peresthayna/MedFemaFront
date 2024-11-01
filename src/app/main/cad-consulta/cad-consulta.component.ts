import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { MedicoService } from '../../components/shared/service/medico.service';
import { PacienteService } from '../../components/shared/service/paciente.service';
import { ConsultaService } from '../../components/shared/service/consulta.service';
import { MedicoConsulta } from '../../components/shared/model/MedicoConsulta';
import { PacienteConsulta } from '../../components/shared/model/PacienteConsulta';
import { ConsultaConsulta } from '../../components/shared/model/ConsultaConsulta';
import { HttpErrorResponse } from '@angular/common/http';
import { ConsultaCadastro } from '../../components/shared/model/ConsultaCadastro';

@Component({
  selector: 'app-cad-consulta',
  templateUrl: './cad-consulta.component.html',
  styleUrl: './cad-consulta.component.css'
})
export class CadConsultaComponent {
  public idParam: number = 0;
  public isUpdate: boolean = false;
  public pacientes: PacienteConsulta[] = [];
  public medicos: MedicoConsulta[] = [];
  public pacienteSelecionado: string = 'Nome do paciente';
  public idPacienteSelecionado: PacienteConsulta = new PacienteConsulta();
  public medicoSelecionado: string = 'Nome do médico';
  public idMedicoSelecionado: MedicoConsulta = new MedicoConsulta();
  public dataSelecionada: Date = new Date();
  public today: Date = new Date(Date.now());
  public horaSelecionada: string = 'Hora da consulta';

  constructor(
    private router: Router,
    private route: ActivatedRoute,
    private medicoService: MedicoService,
    private pacienteService: PacienteService,
    private consultaService: ConsultaService,
  ) {}

  ngOnInit(): void {
    this.medicoService.getMedicos().subscribe((medicos) => this.medicos = medicos);
    this.pacienteService.getPacientes().subscribe((pacientes) => this.pacientes = pacientes);
    this.route.params.subscribe(params => {
      if(params['id'] != 0) {
        this.idParam = params['id'];
        console.log(params)
        this.isUpdate = true;
        this.consultaService.getConsultaById(this.idParam).subscribe(consulta => {
          this.medicoSelecionado = consulta.medico.nome;
          this.idMedicoSelecionado = consulta.medico;
          this.pacienteSelecionado = consulta.paciente.nome;
          this.idPacienteSelecionado = consulta.paciente;
          this.dataSelecionada = new Date(consulta.dataHora.split('T')[0]);
          this.horaSelecionada = consulta.dataHora.split('T')[1];
        })
      }
    })
  }

  public agendar(): void {
    if(this.isUpdate) {
      let consultaConsulta: ConsultaConsulta = new ConsultaConsulta();
      consultaConsulta.id = this.idParam;
      consultaConsulta.paciente = new PacienteConsulta();
      consultaConsulta.paciente = this.idPacienteSelecionado;
      consultaConsulta.medico = new MedicoConsulta();
      consultaConsulta.medico = this.idMedicoSelecionado;
      let formattedDateTime = this.dataSelecionada.toISOString().slice(0, 10);
      formattedDateTime += ' ' + this.horaSelecionada;
      consultaConsulta.dataHora = formattedDateTime;

      this.consultaService.atualizarConsulta(this.idParam, consultaConsulta).subscribe((consulta) => {
        this.navigate('consultas');
      },
      (httpError: HttpErrorResponse) => alert(httpError.error.message));
    } else {
      let consultaCadastro: ConsultaCadastro = new ConsultaCadastro();
      consultaCadastro.paciente = new PacienteConsulta();
      consultaCadastro.paciente = this.idPacienteSelecionado;
      consultaCadastro.medico = new MedicoConsulta();
      consultaCadastro.medico = this.idMedicoSelecionado;
      console.log(consultaCadastro)
      let formattedDateTime = this.dataSelecionada.toISOString().slice(0, 10);
      formattedDateTime += ' ' + this.horaSelecionada;
      consultaCadastro.dataHora = formattedDateTime;

      this.consultaService.cadastrarConsulta(consultaCadastro).subscribe((consulta) => {
        this.navigate('consultas');
      },
      (httpError: HttpErrorResponse) => alert(httpError.error.message));
    }
  }

  public cleanFormGroup(): void {
    this.navigate('consultas');
  }

  public navigate(path: string): void {
    this.router.navigate([path]);
  }

  public onGoBack(): void {
    history.back();
  }

  public choosePaciente(paciente: PacienteConsulta): void {
    this.pacienteSelecionado = paciente.nome;
    this.idPacienteSelecionado = paciente;
  }

  public chooseMedico(medico: MedicoConsulta): void {
    this.medicoSelecionado = medico.nome;
    this.idMedicoSelecionado = medico;
  }

  public chooseHora(hora: string): void {
    this.horaSelecionada = hora;
  }
}
