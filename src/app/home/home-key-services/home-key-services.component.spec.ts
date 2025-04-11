import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HomeKeyServicesComponent } from './home-key-services.component';

describe('HomeKeyServicesComponent', () => {
  let component: HomeKeyServicesComponent;
  let fixture: ComponentFixture<HomeKeyServicesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [HomeKeyServicesComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(HomeKeyServicesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
