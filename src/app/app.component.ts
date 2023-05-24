import { Component, ViewChild, OnInit} from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { EmpAddEditComponent } from './emp-add-edit/emp-add-edit.component';
import { CustomersService } from './services/customers.service';
import {MatPaginator} from '@angular/material/paginator';
import {MatSort} from '@angular/material/sort';
import {MatTableDataSource} from '@angular/material/table';
import { Observable } from 'rxjs';
import { CoreService } from './core/core.service';

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
  "action"
  ];
  dataSource!: MatTableDataSource<any>;

  @ViewChild(MatPaginator) paginator!: MatPaginator;
  @ViewChild(MatSort) sort!: MatSort;


  constructor(
    private _dialog: MatDialog,
    private _empService: CustomersService,
    private _coreService: CoreService){}
  
  ngOnInit(): void {
    this.getCustomerList();
  }
  
  openAddEditEmpForm(){
      const dialogRef = this._dialog.open(EmpAddEditComponent);
      dialogRef.afterClosed().subscribe({
        next: (val) => {
          if (val) {
            this.getCustomerList();
          }
        }
      })
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

    deleteCustomer(id: number){
      this._empService.deleteCustomer(id).subscribe({
        next: (res) => {
          this._coreService.openSnackBar("customer delete","done")
          this.getCustomerList();
        },
        error: console.log,
      })
    }

    openEditForm(data:any){
      const dialogRef = this._dialog.open(EmpAddEditComponent, {
        data,
      });

      dialogRef.afterClosed().subscribe({
        next:(val) => {
          if (val) {
            this.getCustomerList();
          }
        }
      })

    }
}
