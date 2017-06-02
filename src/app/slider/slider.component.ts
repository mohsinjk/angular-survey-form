import { Component, Input } from '@angular/core';

@Component({
  selector: 'ns-slider',
  templateUrl: './slider.component.html',
  styleUrls: ['./slider.component.css']
})
export class SliderComponent {
  @Input() data: any;

  tickInterval = 1;
  disabled = false;
  invert = false;
  max = 10;
  min = 0;
  showTicks = false;
  step = 1;
  thumbLabel = true;
  value = 3;
  vertical = false;

 
  private _tickInterval = 1;
}