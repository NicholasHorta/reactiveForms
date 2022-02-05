import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-submit-form',
  templateUrl: './submit-form.component.html',
  styleUrls: ['./submit-form.component.scss']
})
export class SubmitFormComponent implements OnInit {

  constructor(private fb: Form) { }

  myForm: any = FormGroup

  ngOnInit(): void {
    this.myForm = this.fb.group({
      email: ['', [Validators.email, Validators.required]],
      message: ['', [Validators.required]]
    })
  }


}
// FormBuilder: Creates an AbstractControl from a user-specified configuration
// Provides syntactic sugar that shortens creating an instance of a FormControl, FormGroup, or FormArray.
// Reducing the amount of boilerplate needed to build complex forms