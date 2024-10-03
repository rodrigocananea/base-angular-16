import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {EmpresaConsultaComponent} from "./empresa-consulta/empresa-consulta.component";
import {EmpresaFormComponent} from "./empresa-form/empresa-form.component";

const routes: Routes = [
  {
    path: '',
    redirectTo: 'consulta',
    pathMatch: 'full',
  },
  {
    path: 'consulta',
    component: EmpresaConsultaComponent
  },
  {
    path: 'form',
    component: EmpresaFormComponent
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class EmpresaRoutingModule { }
