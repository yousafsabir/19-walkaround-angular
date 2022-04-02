import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-tracker-button',
  templateUrl: './tracker-button.component.html',
  styleUrls: ['./tracker-button.component.css'],
})
export class TrackerButtonComponent implements OnInit {
  @Input() bgcolor!: string;
  @Input() text!: string;
  constructor() {}

  ngOnInit(): void {}
}
