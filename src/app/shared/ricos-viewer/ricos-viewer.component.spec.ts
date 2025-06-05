import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RicosViewerComponent } from './ricos-viewer.component';

describe('RicosViewerComponent', () => {
  let component: RicosViewerComponent;
  let fixture: ComponentFixture<RicosViewerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [RicosViewerComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RicosViewerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
