import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HomePageEspComponent } from './home-page-esp.component';

describe('HomePageEspComponent', () => {
  let component: HomePageEspComponent;
  let fixture: ComponentFixture<HomePageEspComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [HomePageEspComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(HomePageEspComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
