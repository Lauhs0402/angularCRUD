import { Component, Inject, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { CustomersService } from '../services/customers.service';
import { MatDialogRef } from '@angular/material/dialog';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';
import { CoreService } from '../core/core.service';
import { UserValidator } from '../validators/customer.validator';

@Component({
  selector: 'app-emp-add-edit',
  templateUrl: './emp-add-edit.component.html',
  styleUrls: ['./emp-add-edit.component.scss']
})
export class EmpAddEditComponent implements OnInit{
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
    private _dialogRef: MatDialogRef<EmpAddEditComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any,
    private _coreService: CoreService) 
    
    {
    this.empForm = this._fb.group({
      firstName: ['',Validators.required],
      lastName: ['',Validators.required],
      email:['',[Validators.required, Validators.email]],
      phone:['', [Validators.required, Validators.pattern(/^\d{10}$/)]],
      birth:'',
      gender:'',
      petName:'',
      age:'',
      petType:'',
      breed:'',
      caseDescription:''
    })
  }

  ngOnInit(): void{
    this.empForm.patchValue(this.data);
  }

  onFormSubmit(){
    if(this.empForm.valid){
      if(this.data){
        this._empService
        .updateCustomer(this.data.id, this.empForm.value)
        .subscribe({
          next: (val: any) => {
            this._coreService.openSnackBar('customer detail updated');
            this._dialogRef.close(true);
          },
          error : (err:any) => { console.error(err) }
        } );

      } else {

        this._empService.addCustomer(this.empForm.value).subscribe({
          next: (val: any) => {
            this._coreService.openSnackBar('customer added successfully');
            this._dialogRef.close(true);
          },
          error : (err:any) => { console.error(err) }
        } );

      }
      
    }
  }
 
  }
  

