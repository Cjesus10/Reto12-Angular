import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormListadoComponent } from './form-listado/form-listado.component';
import { FormRegistroComponent } from './form-registro/form-registro.component';
import { ReactiveFormsModule } from '@angular/forms';



@NgModule({
  declarations: [
    FormListadoComponent,
    FormRegistroComponent
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule
  ],
  exports: [
    FormListadoComponent,
    FormRegistroComponent
  ]
})
export class FormulariosModule { }
