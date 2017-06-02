import { Component } from '@angular/core';
import { Http } from '@angular/http';

@Component({
  selector: 'my-app',
  templateUrl: "./app.component.html",
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  myCustomer: Array<any>;

  constructor(private http: Http) {

    this.http.get('./data/customer.json')
      //.map(response => response.json())
      .map(function (response) {
        var json = response.json();
        console.log(json);
        return json;
      })
      .subscribe(res => this.myCustomer = res);
  }

  changeLanguage(changeLanguage: any) {
    console.log(changeLanguage);
  }

}
