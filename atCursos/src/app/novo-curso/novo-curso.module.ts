import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { NovoCursoPageRoutingModule } from './novo-curso-routing.module';

import { NovoCursoPage } from './novo-curso.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    NovoCursoPageRoutingModule
  ],
  declarations: [NovoCursoPage]
})
export class NovoCursoPageModule {}
