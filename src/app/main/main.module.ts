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
import { CadConsultaComponent } from './cad-consulta/cad-consulta.component';
import { CalendarModule } from 'primeng/calendar';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatNativeDateModule } from '@angular/material/core';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';

@NgModule({
  declarations: [
    HomeComponent,
    PagMedicosComponent,
    PagPacientesComponent,
    PagConsultasComponent,
    CadMedicosComponent,
    CadPacientesComponent,
    CadConsultaComponent
  ],
  imports: [
    CommonModule,
    ComponentsModule,
    CardModule,
    FontAwesomeModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule,
    CalendarModule,
    BrowserAnimationsModule,
    MatDatepickerModule,
    MatNativeDateModule,
    MatFormFieldModule,
    MatInputModule
  ]
})
export class MainModule { }
