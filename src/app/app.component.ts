import { Component } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { EmpAddEditComponent } from './emp-add-edit/emp-add-edit.component';
import { CustomersService } from './services/customers.service';
import { OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'crud-app';

  constructor(private _dialog: MatDialog, private _empService: CustomersService){}
  
  ngOnInit(): void {
    this.getCustomerList();
  }
  
  openAddEditEmpForm(){
      this._dialog.open(EmpAddEditComponent)
    }
      
    getCustomerList() {
      this._empService.getCustomerList().subscribe({
        next: (res) => {

        },
        error: (err) => {
          console.log(err)
        }
      })
    }
  
}
