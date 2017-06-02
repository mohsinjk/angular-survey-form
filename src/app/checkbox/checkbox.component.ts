import { Component, Input } from '@angular/core';

@Component({
  selector: 'ns-checkbox',
  templateUrl: './checkbox.component.html',
  styleUrls: ['./checkbox.component.css']
})
export class CheckboxComponent {
 @Input() data: any;
}