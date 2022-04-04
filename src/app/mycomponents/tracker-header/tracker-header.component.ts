import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-tracker-header',
  templateUrl: './tracker-header.component.html',
  styleUrls: ['./tracker-header.component.css'],
})
export class TrackerHeaderComponent implements OnInit {
  title: string = 'My Task Tracker';

  constructor() {}

  ngOnInit(): void {}

  toggleAddTask() {
    console.log("It's gonna toggle");
  }
}
