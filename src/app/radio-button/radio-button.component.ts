import { Component, Input } from '@angular/core';

@Component({
  selector: 'ns-radio-button',
  templateUrl: './radio-button.component.html',
  styleUrls: ['./radio-button.component.css']
})
export class RadioButtonComponent {
  @Input() data: any;
}