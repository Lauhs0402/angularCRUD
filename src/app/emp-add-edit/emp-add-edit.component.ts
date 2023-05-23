import { Component } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { CustomersService } from '../services/customers.service';
import { DialogRef } from '@angular/cdk/dialog';


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

  constructor(
    private _fb: FormBuilder, 
    private _empService: CustomersService,
    private _dialogRef: DialogRef<EmpAddEditComponent>) {
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

  onFormSubmit(){
    if(this.empForm.valid){
      this._empService.addCustomer(this.empForm.value).subscribe({
        next: (val: any) => {
          alert('customer added successfully');
          this._dialogRef.close();
        },
        error : (err:any) => { console.error(err) }
      } );
    }
  }
 
  }
  

