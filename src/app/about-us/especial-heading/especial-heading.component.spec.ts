import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EspecialHeadingComponent } from './especial-heading.component';

describe('EspecialHeadingComponent', () => {
  let component: EspecialHeadingComponent;
  let fixture: ComponentFixture<EspecialHeadingComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [EspecialHeadingComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EspecialHeadingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
