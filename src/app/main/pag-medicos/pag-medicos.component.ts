import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-pag-medicos',
  templateUrl: './pag-medicos.component.html',
  styleUrl: './pag-medicos.component.css'
})
export class PagMedicosComponent implements OnInit {

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
