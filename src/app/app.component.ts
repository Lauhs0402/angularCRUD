import { Component, ViewChild} from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { EmpAddEditComponent } from './emp-add-edit/emp-add-edit.component';
import { CustomersService } from './services/customers.service';
import { OnInit } from '@angular/core';
import {MatPaginator} from '@angular/material/paginator';
import {MatSort} from '@angular/material/sort';
import {MatTableDataSource} from '@angular/material/table';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {

  displayedColumns: string[] = ['id', 'name', 'progress', 'fruit'];
  dataSource!: MatTableDataSource<any>;

  @ViewChild(MatPaginator) paginator!: MatPaginator;
  @ViewChild(MatSort) sort!: MatSort;

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
