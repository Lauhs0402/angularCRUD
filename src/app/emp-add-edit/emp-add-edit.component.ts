import { Component } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';


@Component({
  selector: 'app-emp-add-edit',
  templateUrl: './emp-add-edit.component.html',
  styleUrls: ['./emp-add-edit.component.scss']
})
export class EmpAddEditComponent {
  empForm: FormGroup;

  petType : string[] = [
    "dog",
    "cat",
    "rabbit",
    "duck"
  ];

  constructor(private _fb: FormBuilder) {
    this.empForm = this._fb.group({
      firstName: '',
      lastName: '',
      email:'',
      phone:'',
      birth:'',
      gender:'',
      petName:'',
      age:'',
      petType:'',
      breed:'',
      caseDescription:''
    })
  }
 
  }
  

