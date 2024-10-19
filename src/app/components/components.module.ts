import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoadingComponent } from './loading/loading.component';
import { ElipsisComponent } from './elipsis/elipsis.component';



@NgModule({
  declarations: [
    LoadingComponent,
    ElipsisComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    LoadingComponent,
    ElipsisComponent
  ]
})
export class ComponentsModule { }
