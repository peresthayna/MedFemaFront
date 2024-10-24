import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './main/home/home.component';
import { PagMedicosComponent } from './main/pag-medicos/pag-medicos.component';
import { PagPacientesComponent } from './main/pag-pacientes/pag-pacientes.component';
import { PagConsultasComponent } from './main/pag-consultas/pag-consultas.component';
import { CadMedicosComponent } from './main/cad-medicos/cad-medicos.component';
import { DesativarPerfilComponent } from './components/desativar-perfil/desativar-perfil.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'medicos', component: PagMedicosComponent },
  { path: 'pacientes', component: PagPacientesComponent },
  { path: 'consultas', component: PagConsultasComponent },
  { path: 'add-medico/:id', component: CadMedicosComponent },
  { path: 'add-paciente/:id', component: CadMedicosComponent },
  { path: 'add-consulta/:id', component: CadMedicosComponent },
  { path: 'desativar-perfil/medico/:id', component: DesativarPerfilComponent },
  { path: 'desativar-perfil/paciente/:id', component: DesativarPerfilComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
