import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CompartilharDiariaComponent } from './compartilhar-diaria.component';

describe('CompartilharDiariaComponent', () => {
  let component: CompartilharDiariaComponent;
  let fixture: ComponentFixture<CompartilharDiariaComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CompartilharDiariaComponent]
    });
    fixture = TestBed.createComponent(CompartilharDiariaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
