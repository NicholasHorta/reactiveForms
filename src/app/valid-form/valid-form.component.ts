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
        [Validators.required, Validators.email]
      ],
      password: ['',
        [Validators.required, Validators.pattern('^(?=.*[0-9])(?=.*[a-zA-Z])([a-zA-Z0-9]+)$')]
      ],
      age: [null,
        [
          Validators.required,
          Validators.minLength(2),
          Validators.min(18),
          Validators.max(65)
        ]
      ],
      agree: [false, [Validators.requiredTrue]]
    })
  }

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

  get ageErrors(){
    const ageErrCheck = this.myForm.get('age').errors?.min || this.myForm.get('age').errors?.max
    const ageErrStat = this.myForm.get('age').errors?.min?.min || this.myForm.get('age').errors?.max?.max
    console.log(ageErrCheck, ageErrStat);
    return {check: ageErrCheck, value: ageErrStat}
  }

}