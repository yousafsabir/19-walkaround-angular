import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TrackerButtonComponent } from './tracker-button.component';

describe('TrackerButtonComponent', () => {
  let component: TrackerButtonComponent;
  let fixture: ComponentFixture<TrackerButtonComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TrackerButtonComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TrackerButtonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
