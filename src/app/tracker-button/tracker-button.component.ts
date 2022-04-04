import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-tracker-button',
  templateUrl: './tracker-button.component.html',
  styleUrls: ['./tracker-button.component.css'],
})
export class TrackerButtonComponent implements OnInit {
  @Input() bgcolor!: string;
  @Input() color!: string;
  @Input() text!: string;
  @Output() btnClick = new EventEmitter();
  constructor() {}

  ngOnInit(): void {}

  onClick() {
    this.btnClick.emit();
  }
}
