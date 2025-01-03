import { Component, OnInit } from '@angular/core';
import { debounceTime, Subject, switchMap } from 'rxjs';
import { PacienteConsulta } from '../../components/shared/model/PacienteConsulta';
import { PacienteService } from '../../components/shared/service/paciente.service';
import { SetMapService } from '../../components/shared/service/set-map.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-pag-pacientes',
  templateUrl: './pag-pacientes.component.html',
  styleUrl: './pag-pacientes.component.css'
})
export class PagPacientesComponent implements OnInit {

  public isElipsis: boolean = false;
  public busca: string = '';
  public searchSubject = new Subject<string>();
  public pacientes: { [key: string] : PacienteConsulta[] } = {};

  constructor(
    private pacienteService: PacienteService,
    private setMapService: SetMapService,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.getPacientes();
    this.setupSearch();
  }

  public onChangeElipsis(): void {
    this.isElipsis = !this.isElipsis;
  }

  public onGoBack(): void {
    history.back()
  }

  public onSearchChange(): void {
    if (this.busca == '') {
      this.getPacientes();
    } else {
        this.searchSubject.next(this.busca);
    }
  }

  public setupSearch(): void {
    this.searchSubject
      .pipe(
        debounceTime(500),
        switchMap((busca) => this.pacienteService.getPacientesBySearch(busca))
      )
      .subscribe((pacientes) => {
        this.pacientes = this.setMapService.setMap(pacientes);
      });
  }

  public navigate(path: string): void {
    this.router.navigate([path]);
  }

  public getPacientes(): void {
    this.pacienteService.getPacientes().subscribe((pacientes) => {
      this.pacientes = this.setMapService.setMap(pacientes);
    });
  }

}
