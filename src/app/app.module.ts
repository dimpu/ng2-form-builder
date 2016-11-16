import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule }   from '@angular/forms';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';
import { AppComponent } from './app.component';

import {   
    TextBoxComponent , 
    CheckBoxComponent, 
    RadioButtonComponent , 
    SelectBoxComponent,
    ControlBuilderComponent,
    FormBuilderComponent
} from './form-controls.components';
    

@NgModule({
    imports: [
        BrowserModule,
        FormsModule
    ],
    declarations: [
        RadioButtonComponent,
        CheckBoxComponent,
        TextBoxComponent,
        SelectBoxComponent,
        ControlBuilderComponent,
        FormBuilderComponent,
        AppComponent
    ],
    providers: [],
    bootstrap: [AppComponent],
})
export class AppModule { }