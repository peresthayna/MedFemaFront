import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoadingComponent } from './loading/loading.component';
import { ElipsisComponent } from './elipsis/elipsis.component';
import { HttpClientModule } from '@angular/common/http';
import { SeparadorComponent } from './separador/separador.component';
import { DetailsComponent } from './details/details.component';
import { CampoErroComponent } from './campo-erro/campo-erro.component';



@NgModule({
  declarations: [
    LoadingComponent,
    ElipsisComponent,
    SeparadorComponent,
    DetailsComponent,
    CampoErroComponent
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
