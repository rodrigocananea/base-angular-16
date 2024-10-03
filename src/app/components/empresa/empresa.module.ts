import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { EmpresaRoutingModule } from './empresa-routing.module';
import { EmpresaConsultaComponent } from './empresa-consulta/empresa-consulta.component';
import { EmpresaFormComponent } from './empresa-form/empresa-form.component';
import {SharedModule} from "../../shared/shared.module";
import {TemaModule} from "../../layout/tema/tema.module";


@NgModule({
  declarations: [
    EmpresaConsultaComponent,
    EmpresaFormComponent
  ],
  imports: [
    CommonModule,
    EmpresaRoutingModule,
    SharedModule,
    TemaModule
  ]
})
export class EmpresaModule { }
