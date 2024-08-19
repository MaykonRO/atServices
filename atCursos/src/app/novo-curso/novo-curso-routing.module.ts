import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { NovoCursoPage } from './novo-curso.page';

const routes: Routes = [
  {
    path: '',
    component: NovoCursoPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class NovoCursoPageRoutingModule {}
