import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-pag-pacientes',
  templateUrl: './pag-pacientes.component.html',
  styleUrl: './pag-pacientes.component.css'
})
export class PagPacientesComponent implements OnInit {

  public isElipsis: boolean = false;

  constructor() {}

  ngOnInit(): void {

  }

  public onChangeElipsis(): void {
    this.isElipsis = !this.isElipsis;
  }

  public onGoBack(): void {
    history.back()
  }
}
