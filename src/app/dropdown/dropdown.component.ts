import { Component, Input } from '@angular/core';

@Component({
  selector: 'ns-dropdown',
  templateUrl: './dropdown.component.html',
  styleUrls: ['./dropdown.component.css']
})
export class DropdownComponent {
  @Input() data: any;
}