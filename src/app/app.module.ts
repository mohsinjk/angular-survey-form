import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpModule } from '@angular/http';
import { FormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MdButtonModule, MdCardModule, MdMenuModule, MdToolbarModule, MdIconModule, MdSelectModule, MdInputModule, MdRadioModule, MdCheckboxModule, MdSliderModule } from '@angular/material';

import { AppComponent } from './app.component';
import { TextboxComponent } from './textbox/textbox.component';
import { DropdownComponent } from './dropdown/dropdown.component';
import { RadioButtonComponent } from './radio-button/radio-button.component';
import { CheckboxComponent } from './checkbox/checkbox.component';
import { SliderComponent } from './slider/slider.component';
import { TextareaComponent } from './textarea/textarea.component';
import { SurveyComponent } from './survey/survey.component';

@NgModule({
  imports: [
    HttpModule,
    FormsModule,
    BrowserModule,
    BrowserAnimationsModule,
    MdButtonModule,
    MdMenuModule,
    MdCardModule,
    MdToolbarModule,
    MdIconModule,
    MdSelectModule,
    MdInputModule,
    MdRadioModule,
    MdCheckboxModule,
    MdSliderModule
  ],
  declarations: [AppComponent, TextboxComponent, DropdownComponent, RadioButtonComponent, CheckboxComponent, SliderComponent, TextareaComponent, SurveyComponent],
  bootstrap: [AppComponent]
})
export class AppModule { }
