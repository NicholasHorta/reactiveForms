import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-nested-form',
  templateUrl: './nested-form.component.html',
  styleUrls: ['./nested-form.component.scss']
})
export class NestedFormComponent implements OnInit {

  nestedForm: any = FormGroup;

  constructor(private fb: FormBuilder) { }

  ngOnInit(): void {

    const phone = this.fb.group({
      int: ['', Validators.maxLength(2)],
      line: ''
    })

    this.nestedForm = this.fb.group({
      email: '',
      homeNumber: phone,
      cellNumber: phone
    })
  }

}
