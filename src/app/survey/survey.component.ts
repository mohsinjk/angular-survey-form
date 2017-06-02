import { Component, Input } from '@angular/core';
import { Http } from '@angular/http';

@Component({
  selector: 'ns-survey',
  templateUrl: './survey.component.html',
  styleUrls: ['./survey.component.css']
})
export class SurveyComponent {
  @Input() settings: any;
  selectedItem: any;
  mySurvey: any;
  questions: Array<any>;
  selectedIndex: number = 0;
  disableButton: boolean = false;
  finished: boolean = false;

  constructor(private http: Http) {
    this.http.get('./data/survey.json')
      //.map(response => response.json())
      .map(function (response) {
        var json = response.json();
        console.log(json);
        return json;
      })
      .subscribe(data => this.mySurvey = data);
  }

  next() {
    this.selectedItem = this.mySurvey.questions[this.selectedIndex];
    this.selectedIndex++;
    console.log(this.selectedItem);
    if (this.mySurvey.questions.length < this.selectedIndex) {
      this.disableButton = true;
    }
  }
  finish() {
    this.disableButton = true;
    this.finished = true;
  }
}