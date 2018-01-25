import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';
import {FormsModule,ReactiveFormsModule} from '@angular/forms'


import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { FormsComponent } from './forms/forms.component';
import { FormFieldComponent } from './form-field/form-field.component';

@NgModule({
  declarations: [
    AppComponent,
    FormsComponent,
    FormFieldComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
