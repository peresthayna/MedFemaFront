import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-pag-consultas',
  templateUrl: './pag-consultas.component.html',
  styleUrl: './pag-consultas.component.css'
})
export class PagConsultasComponent implements OnInit {

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
