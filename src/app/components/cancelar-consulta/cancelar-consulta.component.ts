import { Component } from '@angular/core';
import { ConsultaConsulta } from '../shared/model/ConsultaConsulta';
import { ActivatedRoute, Router } from '@angular/router';
import { ConsultaService } from '../shared/service/consulta.service';
import { HttpErrorResponse } from '@angular/common/http';

@Component({
  selector: 'app-cancelar-consulta',
  templateUrl: './cancelar-consulta.component.html',
  styleUrl: './cancelar-consulta.component.css'
})
export class CancelarConsultaComponent {

  public consulta: ConsultaConsulta = new ConsultaConsulta();
  public idParam: number;
  public motivoCancelamento: string = 'Motivo do cancelamento';
  public isError: boolean = false;

  constructor(
    private router: Router,
    private route: ActivatedRoute,
    private consultaService: ConsultaService,
  ) {}

  ngOnInit(): void {
    this.route.params.subscribe(params => {
      this.idParam = params['id'];
        this.consultaService.getConsultaById(this.idParam).subscribe(consulta => {
          this.consulta = consulta;
        });
      });
  }

  public navigate(path: string): void {
    this.router.navigate([path]);
  }

  public cancelar(): void {
    this.consulta.motivoCancelamento = this.motivoCancelamento;
    this.consultaService.deletarConsulta(this.consulta.id, this.motivoCancelamento).subscribe(
      () => this.navigate('consultas'),
      (httpError: HttpErrorResponse) => alert(httpError.error)
    );
  }

  public selecionarMotivo(motivo: string): void {
    this.motivoCancelamento = motivo;
  }
}
