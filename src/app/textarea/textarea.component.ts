import { Component, Input } from '@angular/core';

@Component({
  selector: 'ns-textarea',
  templateUrl: './textarea.component.html',
  styleUrls: ['./textarea.component.css']
})
export class TextareaComponent {
  @Input() data: any;

  answer: string="I feel awesome :)";
}