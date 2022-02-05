import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { AngularFirestore } from 'angularFire2/firestore';
import { tap, first } from 'rxjs/operators';

@Component({
  selector: 'app-submit-form',
  templateUrl: './submit-form.component.html',
  styleUrls: ['./submit-form.component.scss']
})
export class SubmitFormComponent implements OnInit {

  constructor(private fb: FormBuilder, private afs: AngularFirestore) { }

  myForm: any = FormGroup


  loading: boolean = false;
  success: boolean = false;



  ngOnInit(): void {
    this.myForm = this.fb.group({
      email: ['', [Validators.required]],
      message: ['', [Validators.required]]
    })
  }


  get email() {
    return this.myForm.get('email');
  }
  get message() {
    return this.myForm.get('message')
  }


  async submitHandler() {
    this.loading = true;
    const formValue = this.myForm.value

    try {
      await this.afs.collection('contacts').add(formValue);
      this.success = true;
    } catch (error) {
      console.error(error)
    }
    this.loading = false;
  }

}
