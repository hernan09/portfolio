import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BotonTopComponent } from './boton-top.component';

describe('BotonTopComponent', () => {
  let component: BotonTopComponent;
  let fixture: ComponentFixture<BotonTopComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BotonTopComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BotonTopComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
