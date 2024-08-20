import { Injectable } from '@angular/core';
import { CursoService } from '../service/curso.service';
@Injectable({
  providedIn: 'root'
})
export class AdicinarCursoService {

  constructor(
    private curso:CursoService
  ) { }

  

}

