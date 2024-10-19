import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './main/home/home.component';
import { PagMedicosComponent } from './main/pag-medicos/pag-medicos.component';
import { PagPacientesComponent } from './main/pag-pacientes/pag-pacientes.component';
import { PagConsultasComponent } from './main/pag-consultas/pag-consultas.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'medicos', component: PagMedicosComponent },
  { path: 'pacientes', component: PagPacientesComponent },
  { path: 'consultas', component: PagConsultasComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
