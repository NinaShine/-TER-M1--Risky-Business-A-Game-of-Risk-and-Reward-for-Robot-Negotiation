import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SubmitForcesComponent } from './submit-forces.component';

describe('SubmitForcesComponent', () => {
  let component: SubmitForcesComponent;
  let fixture: ComponentFixture<SubmitForcesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SubmitForcesComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SubmitForcesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
