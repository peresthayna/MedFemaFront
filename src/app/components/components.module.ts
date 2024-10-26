import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoadingComponent } from './loading/loading.component';
import { ElipsisComponent } from './elipsis/elipsis.component';
import { HttpClientModule } from '@angular/common/http';
import { SeparadorComponent } from './separador/separador.component';
import { DetailsComponent } from './details/details.component';
import { CampoErroComponent } from './campo-erro/campo-erro.component';
import { DesativarPerfilComponent } from './desativar-perfil/desativar-perfil.component';
import { CancelarConsultaComponent } from './cancelar-consulta/cancelar-consulta.component';



@NgModule({
  declarations: [
    LoadingComponent,
    ElipsisComponent,
    SeparadorComponent,
    DetailsComponent,
    CampoErroComponent,
    DesativarPerfilComponent,
    CancelarConsultaComponent
  ],
  imports: [
    CommonModule,
    HttpClientModule
  ],
  exports: [
    LoadingComponent,
    ElipsisComponent,
    SeparadorComponent,
    DetailsComponent,
    CampoErroComponent

  ]
})
export class ComponentsModule { }
