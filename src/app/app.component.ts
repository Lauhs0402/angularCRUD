import { Component, ViewChild, OnInit} from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { EmpAddEditComponent } from './emp-add-edit/emp-add-edit.component';
import { CustomersService } from './services/customers.service';
import {MatPaginator} from '@angular/material/paginator';
import {MatSort} from '@angular/material/sort';
import {MatTableDataSource} from '@angular/material/table';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})

export class AppComponent implements OnInit {


displayedColumns: string[] = [
  "id",
  "firstName",
  "lastName",
  "email",
  "phone",
  "birth",
  "gender",
  "petName",
  "age",
  "petType",
  "breed",
  "caseDescription",
  ];
  dataSource!: MatTableDataSource<any>;

  @ViewChild(MatPaginator) paginator!: MatPaginator;
  @ViewChild(MatSort) sort!: MatSort;


  constructor(
    private _dialog: MatDialog,
    private _empService: CustomersService){}
  
  ngOnInit(): void {
    this.getCustomerList();
  }
  
  openAddEditEmpForm(){
      this._dialog.open(EmpAddEditComponent)
    }
      
    getCustomerList() {
      this._empService.getCustomerList().subscribe({
        next: (res) => {
          this.dataSource = new MatTableDataSource(res);
          this.dataSource.sort = this.sort;
          this.dataSource.paginator = this.paginator;},
        error: console.log,
        });
    }
    applyFilter(event: Event) {
      const filterValue = (event.target as HTMLInputElement).value;
      this.dataSource.filter = filterValue.trim().toLowerCase();
  
      if (this.dataSource.paginator) {
        this.dataSource.paginator.firstPage();
      }
    }
}
