import { ComponentFixture, TestBed } from '@angular/core/testing';
import { NovoCursoPage } from './novo-curso.page';

describe('NovoCursoPage', () => {
  let component: NovoCursoPage;
  let fixture: ComponentFixture<NovoCursoPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(NovoCursoPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
