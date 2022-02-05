import { Component, OnInit } from '@angular/core';
import { FormArray, FormBuilder, FormGroup } from '@angular/forms';
@Component({
  selector: 'app-array-form',
  templateUrl: './array-form.component.html',
  styleUrls: ['./array-form.component.scss']
})
export class ArrayFormComponent implements OnInit {

  myForm: any = FormGroup;

  constructor(private fb: FormBuilder) { }

  ngOnInit(): void {
    this.myForm = this.fb.group({
      email: '',
      phones: this.fb.array([]),
    })
  }


  get phoneForms() {
    console.log(this.myForm.get('phones'));
    return this.myForm.get('phones') as FormArray;
  }

  addPhones(){
    const phone = this.fb.group({
      int: [],
      number: []
    })
    this.phoneForms.push(phone); 
  }


  deletePhone(i: any){
    this.phoneForms.removeAt(i);
  }

}
