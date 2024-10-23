import { Component, OnInit } from '@angular/core';
import { debounceTime, Subject, switchMap } from 'rxjs';
import { MedicoConsulta } from '../../components/shared/model/MedicoConsulta';
import { MedicoService } from '../../components/shared/service/medico.service';
import { SetMapService } from '../../components/shared/service/set-map.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-pag-medicos',
  templateUrl: './pag-medicos.component.html',
  styleUrl: './pag-medicos.component.css'
})
export class PagMedicosComponent implements OnInit {

  public isElipsis: boolean = false;
  public busca: string = '';
  public searchSubject = new Subject<string>();
  public medicos: { [key: string] : MedicoConsulta[] } = {};

  constructor(
    private medicoService: MedicoService,
    private setMapService: SetMapService,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.getMedicos();
    this.setupSearch();
  }

  public onChangeElipsis(): void {
    this.isElipsis = !this.isElipsis;
  }

  public onGoBack(): void {
    history.back()
  }

  public getMedicos(): void {
    this.medicoService.getMedicos().subscribe((medicos) => {
      this.medicos = this.setMapService.setMap(medicos);
    });
  }

  public onSearchChange(): void {
    if (this.busca == '') {
      this.getMedicos();
    } else {
        this.searchSubject.next(this.busca);
    }
  }

  public setupSearch(): void {
    this.searchSubject
      .pipe(
        debounceTime(500),
        switchMap((busca) => this.medicoService.getMedicosBySearch(busca))
      )
      .subscribe((medicos) => {
        this.medicos = this.setMapService.setMap(medicos);
      });
  }

  public navigate(path: string): void {
    this.router.navigate([path]);
  }
}
