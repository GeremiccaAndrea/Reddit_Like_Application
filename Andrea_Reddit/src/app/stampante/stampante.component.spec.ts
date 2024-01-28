import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StampanteComponent } from './stampante.component';

describe('StampanteComponent', () => {
  let component: StampanteComponent;
  let fixture: ComponentFixture<StampanteComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [StampanteComponent]
    });
    fixture = TestBed.createComponent(StampanteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
