import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from '../../src/app/app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { BasicFormComponent } from './basic-form/basic-form.component';
import { NestedFormComponent } from './nested-form/nested-form.component';
import { ArrayFormComponent } from './array-form/array-form.component';
import { ValidFormComponent } from './valid-form/valid-form.component';
import { SubmitFormComponent } from './submit-form/submit-form.component';
import { ReactiveFormsModule } from '@angular/forms';
import { MatInputModule } from "@angular/material/input";
import { MatSelectModule } from "@angular/material/select";
import { MatButtonModule } from "@angular/material/button";
import { MatCheckboxModule } from "@angular/material/checkbox";
import { MatChipsModule } from "@angular/material/chips";

@NgModule({
  declarations: [
    AppComponent,
    BasicFormComponent,
    NestedFormComponent,
    ArrayFormComponent,
    ValidFormComponent,
    SubmitFormComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,
    MatInputModule,
    MatSelectModule,
    MatButtonModule,
    MatCheckboxModule,
    MatChipsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
