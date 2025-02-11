import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HomePageEngComponent } from './home-page-eng.component';

describe('HomePageEngComponent', () => {
  let component: HomePageEngComponent;
  let fixture: ComponentFixture<HomePageEngComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [HomePageEngComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(HomePageEngComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
