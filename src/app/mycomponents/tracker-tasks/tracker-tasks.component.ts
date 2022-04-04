import { Component, OnInit } from '@angular/core';
import { Task } from 'src/app/Task';
import { TASK } from 'src/app/mock-tasks';

@Component({
  selector: 'app-tracker-tasks',
  templateUrl: './tracker-tasks.component.html',
  styleUrls: ['./tracker-tasks.component.css'],
})
export class TrackerTasksComponent implements OnInit {
  tasks: Task[] = TASK;

  constructor() {}

  ngOnInit(): void {}
}
