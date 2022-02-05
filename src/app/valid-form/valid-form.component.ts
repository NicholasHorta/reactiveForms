import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
@Component({
  selector: 'app-valid-form',
  templateUrl: './valid-form.component.html',
  styleUrls: ['./valid-form.component.scss']
})
export class ValidFormComponent implements OnInit {

  constructor(private fb: FormBuilder) { }

  myForm: any = FormGroup;

  ngOnInit(): void {
    this.myForm = this.fb.group({
      email: ['',
        Validators.required,
        Validators.email
      ],
      password: ['',
        Validators.required,
        // at least one letter and one number in the pw string
        Validators.pattern('^(?=.*[0-9])(?=.*[a-zA-Z])([a-zA-Z0-9]+)$')
      ],
      age: [null,
        Validators.required,
        Validators.minLength(2),
        Validators.min(18),
        Validators.max(65)
      ],
      agree: [false, Validators.requiredTrue]
    })
  }


  // PRO TIP! Setup GETTERS for the various fields in your form - This will make your HTML way cleaner 
  //          as you're setting up logic to show different error messages for different fields

  get email() {
    return this.myForm.get('email');
  }
  get password() {
    return this.myForm.get('password');
  }
  get age() {
    return this.myForm.get('age');
  }
  get agree() {
    return this.myForm.get('agree');
  }




}