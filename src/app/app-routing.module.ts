import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {BaseComponent} from "./layout/base/base.component";

const routes: Routes = [
  { path: '', redirectTo: 'base', pathMatch: 'full' },
  {
    path: 'base',
    component: BaseComponent,
    children: [
      {
        path: 'empresa', loadChildren: () => import('./components/empresa/empresa.module').then(m => m.EmpresaModule),
      },
    ]
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
