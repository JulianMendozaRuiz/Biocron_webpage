import { ComponentFixture, TestBed } from '@angular/core/testing';

import { IndustriesAreaComponent } from './industries-area.component';

describe('IndustriesAreaComponent', () => {
  let component: IndustriesAreaComponent;
  let fixture: ComponentFixture<IndustriesAreaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [IndustriesAreaComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(IndustriesAreaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
