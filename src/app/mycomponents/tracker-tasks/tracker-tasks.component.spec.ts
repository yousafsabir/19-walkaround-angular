import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TrackerTasksComponent } from './tracker-tasks.component';

describe('TrackerTasksComponent', () => {
  let component: TrackerTasksComponent;
  let fixture: ComponentFixture<TrackerTasksComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TrackerTasksComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TrackerTasksComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
