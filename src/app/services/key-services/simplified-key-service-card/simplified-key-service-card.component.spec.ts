import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SimplifiedKeyServiceCardComponent } from './simplified-key-service-card.component';

describe('SimplifiedKeyServiceCardComponent', () => {
  let component: SimplifiedKeyServiceCardComponent;
  let fixture: ComponentFixture<SimplifiedKeyServiceCardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [SimplifiedKeyServiceCardComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SimplifiedKeyServiceCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
