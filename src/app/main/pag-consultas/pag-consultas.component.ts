import { Component, OnInit } from '@angular/core';
import { ConsultaService } from '../../components/shared/service/consulta.service';
import { ConsultaConsulta } from '../../components/shared/model/ConsultaConsulta';
import { debounceTime, Subject, switchMap } from 'rxjs';
import { SetMapService } from '../../components/shared/service/set-map.service';

@Component({
  selector: 'app-pag-consultas',
  templateUrl: './pag-consultas.component.html',
  styleUrl: './pag-consultas.component.css'
})
export class PagConsultasComponent implements OnInit {

  public isElipsis: boolean = false;
  public busca: string = '';
  public searchSubject = new Subject<string>();
  public consultas: { [key: string] : ConsultaConsulta[] } = {};

  constructor(
    private consultaService: ConsultaService,
    private setMapService: SetMapService,
  ) {}

  ngOnInit(): void {
    this.getConsultas();
  }

  public onChangeElipsis(): void {
    this.isElipsis = !this.isElipsis;
  }

  public onGoBack(): void {
    history.back()
  }

  public getConsultas(): void {
    this.consultaService.getConsultas().subscribe((consultas) => {
      this.consultas = this.setMapService.setConsultasMap(consultas);
    });
  }

  public onSearchChange(): void {
    if (this.busca == '') {
      this.getConsultas();
    } else {
      this.searchSubject.next(this.busca);
    }
  }

  public setupSearch(): void {
    this.searchSubject
      .pipe(
        debounceTime(500),
        switchMap((busca) => this.consultaService.getConsultasBySearch(busca))
      )
      .subscribe((consultas) => {
        this.consultas = this.setMapService.setConsultasMap(consultas);
      });
  }
}
