import { ComponentFixture, TestBed } from '@angular/core/testing';

import { KeyServiceCardComponent } from './key-service-card.component';

describe('KeyServiceCardComponent', () => {
  let component: KeyServiceCardComponent;
  let fixture: ComponentFixture<KeyServiceCardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [KeyServiceCardComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(KeyServiceCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
