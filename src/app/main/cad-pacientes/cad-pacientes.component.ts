import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { PacienteService } from '../../components/shared/service/paciente.service';
import { PacienteConsulta } from '../../components/shared/model/PacienteConsulta';
import { Endereco } from '../../components/shared/model/Endereco';
import { HttpErrorResponse } from '@angular/common/http';
import { PacienteCadastro } from '../../components/shared/model/PacienteCadastro';

@Component({
  selector: 'app-cad-pacientes',
  templateUrl: './cad-pacientes.component.html',
  styleUrl: './cad-pacientes.component.css'
})
export class CadPacientesComponent {

  public pacienteForm: FormGroup;
  public idParam: number = 0;
  public isUpdate: boolean = false;
  public uf: string = 'UF';

  constructor(
    private router: Router,
    private route: ActivatedRoute,
    private pacienteService: PacienteService
  ) {}

  ngOnInit(): void {
    this.route.params.subscribe(params => {
      if(params['id'] != 0) {
        this.idParam = params['id'];
        this.isUpdate = true;
        this.pacienteService.getPacienteById(this.idParam).subscribe(paciente => {
          this.pacienteForm!.get('nome')?.setValue(paciente.nome);
          this.pacienteForm!.get('cpf')?.setValue(paciente.cpf);
          this.pacienteForm!.get('cpf')!.disable();
          this.pacienteForm!.get('email')?.setValue(paciente.email);
          this.pacienteForm!.get('email')!.disable();
          this.pacienteForm!.get('telefone')?.setValue(paciente.telefone);
          this.pacienteForm!.get('logradouro')?.setValue(paciente.endereco.logradouro);
          this.pacienteForm!.get('numero')?.setValue(paciente.endereco.numero);
          this.pacienteForm!.get('complemento')?.setValue(paciente.endereco.complemento);
          this.pacienteForm!.get('cidade')?.setValue(paciente.endereco.cidade);
          this.pacienteForm!.get('cep')?.setValue(paciente.endereco.cep);
          this.uf = paciente.endereco.uf;
        })
      }
    })
    this.iniciarFormulario();
  }

  public iniciarFormulario(): void {
    this.pacienteForm = new FormGroup({
      nome: new FormControl('', [Validators.required, Validators.minLength(5), Validators.maxLength(50)]),
      cpf: new FormControl('', Validators.required),
      email: new FormControl('', [Validators.required, Validators.email]),
      telefone: new FormControl('', Validators.required),
      logradouro: new FormControl('', Validators.required),
      numero: new FormControl(''),
      complemento: new FormControl(''),
      cidade: new FormControl('', Validators.required),
      cep: new FormControl('', Validators.required),
    });
    this.uf = 'UF';
  }

  public salvarPaciente(): void {
    if(this.isUpdate) {
      let pacienteConsulta: PacienteConsulta = new PacienteConsulta();
      pacienteConsulta.id = this.idParam;
      pacienteConsulta.nome = this.pacienteForm!.get('nome')?.value;
      pacienteConsulta.cpf = this.pacienteForm!.get('cpf')?.value;
      pacienteConsulta.telefone = this.pacienteForm!.get('telefone')?.value;
      pacienteConsulta.email = this.pacienteForm!.get('email')?.value;
      pacienteConsulta.endereco = new Endereco();
      pacienteConsulta.endereco.logradouro = this.pacienteForm!.get('logradouro')?.value;
      pacienteConsulta.endereco.numero = this.pacienteForm!.get('numero')?.value;
      pacienteConsulta.endereco.complemento = this.pacienteForm!.get('complemento')?.value;
      pacienteConsulta.endereco.cidade = this.pacienteForm!.get('cidade')?.value;
      pacienteConsulta.endereco.cep = this.pacienteForm!.get('cep')?.value;
      pacienteConsulta.endereco.uf = this.uf;

      this.pacienteService.atualizarPaciente(this.idParam, pacienteConsulta).subscribe((paciente) => {
        this.navigate('pacientes');
      },
      (httpError: HttpErrorResponse) => alert(httpError.error.message));
    } else {
      let pacienteCadastro: PacienteCadastro = new PacienteCadastro();
      pacienteCadastro.nome = this.pacienteForm!.get('nome')?.value;
      pacienteCadastro.cpf = this.pacienteForm!.get('cpf')?.value;
      pacienteCadastro.telefone = this.pacienteForm!.get('telefone')?.value;
      pacienteCadastro.email = this.pacienteForm!.get('email')?.value;
      pacienteCadastro.endereco = new Endereco();
      pacienteCadastro.endereco.logradouro = this.pacienteForm!.get('logradouro')?.value;
      pacienteCadastro.endereco.numero = this.pacienteForm!.get('numero')?.value;
      pacienteCadastro.endereco.complemento = this.pacienteForm!.get('complemento')?.value;
      pacienteCadastro.endereco.cidade = this.pacienteForm!.get('cidade')?.value;
      pacienteCadastro.endereco.cep = this.pacienteForm!.get('cep')?.value;
      pacienteCadastro.endereco.uf = this.uf;

      this.pacienteService.cadastrarPaciente(pacienteCadastro).subscribe((paciente) => {
        this.navigate('pacientes');
      },
      (httpError: HttpErrorResponse) => alert(httpError.error.message));
    }
  }

  public cleanFormGroup(): void {
    this.pacienteForm.reset();
    this.navigate('pacientes');
  }

  public validarCampo(campo: string): boolean {
    const control = this.pacienteForm!.get(campo);
    return !control!.valid && (control!.dirty || control!.touched);
  }

  public navigate(path: string): void {
    this.router.navigate([path]);
  }

  public onGoBack(): void {
    history.back();
  }

  public chooseUF(uf: string): void {
    this.uf = uf;
  }
}
