import { Component, OnInit } from '@angular/core';
import { MyserviceService } from '../myservice.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-list-employee',
  templateUrl: './list-employee.component.html',
  styleUrls: ['./list-employee.component.css'],
})
export class ListEmployeeComponent implements OnInit {
  employeeList: any = [];

  constructor(
    private service: MyserviceService,
    private route: ActivatedRoute,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.getEmployeeList();
  }

  getEmployeeList() {
    this.service.getEmployeeList().subscribe((res) => {
      console.log(res);
      this.employeeList = res;
    });
  }

  onDelete(id: any) {
    this.employeeList.splice(id, 1);
    this.service.deleteEmployee(id).subscribe((res) => {
      console.log(res);
    });
  }

  onEdit(id: any) {
    this.router.navigate(['/edit', { id: id }]);
  }
}
