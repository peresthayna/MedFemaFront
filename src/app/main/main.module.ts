import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home/home.component';
import { ComponentsModule } from '../components/components.module';
import { CardModule } from 'primeng/card';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { PagMedicosComponent } from './pag-medicos/pag-medicos.component';
import { PagPacientesComponent } from './pag-pacientes/pag-pacientes.component';
import { PagConsultasComponent } from './pag-consultas/pag-consultas.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CadMedicosComponent } from './cad-medicos/cad-medicos.component';
import { RouterModule } from '@angular/router';
import { CadPacientesComponent } from './cad-pacientes/cad-pacientes.component';

@NgModule({
  declarations: [
    HomeComponent,
    PagMedicosComponent,
    PagPacientesComponent,
    PagConsultasComponent,
    CadMedicosComponent,
    CadPacientesComponent
  ],
  imports: [
    CommonModule,
    ComponentsModule,
    CardModule,
    FontAwesomeModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule
  ]
})
export class MainModule { }
