import { Component, Input } from '@angular/core';

@Component({
  selector: 'ns-textbox',
  templateUrl: './textbox.component.html',
  styleUrls: ['./textbox.component.css']
})
export class TextboxComponent {
  //@Input() data: any;

  @Input()
  private _data = {};
  @Input()
  set data(data: any) {
    //if (data.controlType === "textbox") {
      this._data = (data) || '<no data set>';
    //}
  }
  get data(): any {
    return this._data;
  }
}