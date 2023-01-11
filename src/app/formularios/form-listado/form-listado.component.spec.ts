import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FormListadoComponent } from './form-listado.component';

describe('FormListadoComponent', () => {
  let component: FormListadoComponent;
  let fixture: ComponentFixture<FormListadoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FormListadoComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FormListadoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
