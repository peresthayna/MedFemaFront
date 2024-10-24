import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { MedicoService } from '../../components/shared/service/medico.service';
import { MedicoConsulta } from '../../components/shared/model/MedicoConsulta';
import { HttpErrorResponse } from '@angular/common/http';
import { MedicoCadastro } from '../../components/shared/model/MedicoCadastro';
import { Endereco } from '../../components/shared/model/Endereco';

@Component({
  selector: 'app-cad-medicos',
  templateUrl: './cad-medicos.component.html',
  styleUrl: './cad-medicos.component.css'
})
export class CadMedicosComponent {

  public medicoForm: FormGroup;
  public idParam: number = 0;
  public isUpdate: boolean = false;
  public especialidade: string = 'Especialidade';
  public uf: string = 'UF';

  constructor(
    private router: Router,
    private route: ActivatedRoute,
    private medicoService: MedicoService
  ) {}

  ngOnInit(): void {
    this.route.params.subscribe(params => {
      if(params['id'] != 0) {
        this.idParam = params['id'];
        this.isUpdate = true;
        this.medicoService.getMedicoById(this.idParam).subscribe(medico => {
          this.medicoForm!.get('nome')?.setValue(medico.nome);
          this.medicoForm!.get('crm')?.setValue(medico.crm);
          this.medicoForm!.get('crm')!.disable();
          this.medicoForm!.get('email')?.setValue(medico.email);
          this.medicoForm!.get('email')!.disable();
          this.medicoForm!.get('telefone')?.setValue(medico.telefone);
          this.medicoForm!.get('logradouro')?.setValue(medico.endereco.logradouro);
          this.medicoForm!.get('numero')?.setValue(medico.endereco.numero);
          this.medicoForm!.get('complemento')?.setValue(medico.endereco.complemento);
          this.medicoForm!.get('cidade')?.setValue(medico.endereco.cidade);
          this.medicoForm!.get('cep')?.setValue(medico.endereco.cep);
          this.uf = medico.endereco.uf;
          this.especialidade = medico.especialidade;
        })
      }
    })
    this.iniciarFormulario();
  }

  public iniciarFormulario(): void {
    this.medicoForm = new FormGroup({
      nome: new FormControl('', [Validators.required, Validators.minLength(5), Validators.maxLength(50)]),
      crm: new FormControl('', Validators.required),
      email: new FormControl('', [Validators.required, Validators.email]),
      telefone: new FormControl('', Validators.required),
      logradouro: new FormControl('', Validators.required),
      numero: new FormControl(''),
      complemento: new FormControl(''),
      cidade: new FormControl('', Validators.required),
      cep: new FormControl('', Validators.required),
    });
    this.especialidade = 'Especialidade';
    this.uf = 'UF';
  }

  public salvarMedico(): void {
    if(this.isUpdate) {
      let medicoConsulta: MedicoConsulta = new MedicoConsulta();
      medicoConsulta.id = this.idParam;
      medicoConsulta.nome = this.medicoForm!.get('nome')?.value;
      medicoConsulta.crm = this.medicoForm!.get('crm')?.value;
      medicoConsulta.telefone = this.medicoForm!.get('telefone')?.value;
      medicoConsulta.email = this.medicoForm!.get('email')?.value;
      medicoConsulta.endereco = new Endereco();
      medicoConsulta.endereco.logradouro = this.medicoForm!.get('logradouro')?.value;
      medicoConsulta.endereco.numero = this.medicoForm!.get('numero')?.value;
      medicoConsulta.endereco.complemento = this.medicoForm!.get('complemento')?.value;
      medicoConsulta.endereco.cidade = this.medicoForm!.get('cidade')?.value;
      medicoConsulta.endereco.cep = this.medicoForm!.get('cep')?.value;
      medicoConsulta.especialidade = this.especialidade;
      medicoConsulta.endereco.uf = this.uf;

      this.medicoService.atualizarMedico(this.idParam, medicoConsulta).subscribe((medico) => {
        this.navigate('medicos');
      },
      (httpError: HttpErrorResponse) => alert(httpError.error.message));
    } else {
      let medicoCadastro: MedicoCadastro = new MedicoCadastro();
      medicoCadastro.nome = this.medicoForm!.get('nome')?.value;
      medicoCadastro.crm = this.medicoForm!.get('crm')?.value;
      medicoCadastro.telefone = this.medicoForm!.get('telefone')?.value;
      medicoCadastro.email = this.medicoForm!.get('email')?.value;
      medicoCadastro.endereco = new Endereco();
      medicoCadastro.endereco.logradouro = this.medicoForm!.get('logradouro')?.value;
      (this.medicoForm!.get('numero')?.value != '') ?
      medicoCadastro.endereco.numero = this.medicoForm!.get('numero')?.value :
      medicoCadastro.endereco.numero = "";
      (this.medicoForm!.get('complemento')?.value != '') ?
      medicoCadastro.endereco.complemento = this.medicoForm!.get('complemento')?.value :
      medicoCadastro.endereco.complemento = "";
      medicoCadastro.endereco.cidade = this.medicoForm!.get('cidade')?.value;
      medicoCadastro.endereco.cep = this.medicoForm!.get('cep')?.value;
      medicoCadastro.especialidade = this.especialidade;
      medicoCadastro.endereco.uf = this.uf;

      this.medicoService.cadastrarMedico(medicoCadastro).subscribe((medico) => {
        this.navigate('');
      },
      (httpError: HttpErrorResponse) => alert(httpError.error.message));
    }
  }

  public cleanFormGroup(): void {
    this.medicoForm.reset();
    this.navigate('medicos');
  }

  public validarCampo(campo: string): boolean {
    const control = this.medicoForm!.get(campo);
    return !control!.valid && (control!.dirty || control!.touched);
  }

  public navigate(path: string): void {
    this.router.navigate([path]);
  }

  public onGoBack(): void {
    history.back();
  }

  public chooseEspecialidade(especialidade: string): void {
    this.especialidade = especialidade;
  }

  public chooseUF(uf: string): void {
    this.uf = uf;
  }
}
