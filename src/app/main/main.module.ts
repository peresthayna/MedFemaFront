import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home/home.component';
import { ComponentsModule } from '../components/components.module';
import { CardModule } from 'primeng/card';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { PagMedicosComponent } from './pag-medicos/pag-medicos.component';
import { PagPacientesComponent } from './pag-pacientes/pag-pacientes.component';
import { PagConsultasComponent } from './pag-consultas/pag-consultas.component';

@NgModule({
  declarations: [
    HomeComponent,
    PagMedicosComponent,
    PagPacientesComponent,
    PagConsultasComponent
  ],
  imports: [
    CommonModule,
    ComponentsModule,
    CardModule,
    FontAwesomeModule
  ]
})
export class MainModule { }
