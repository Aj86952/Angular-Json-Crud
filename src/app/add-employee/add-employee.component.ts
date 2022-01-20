import { Component, OnInit } from '@angular/core';
import { MyserviceService } from '../myservice.service';
import { FormGroup, FormControl } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-add-employee',
  templateUrl: './add-employee.component.html',
  styleUrls: ['./add-employee.component.css'],
})
export class AddEmployeeComponent implements OnInit {
  employee = new FormGroup({
    name: new FormControl(''),
    city: new FormControl(''),
    email: new FormControl(''),
  });
  alert: boolean = false;
  constructor(private service: MyserviceService, private router: Router) {}

  ngOnInit(): void {}

  onSubmit(data: any) {
    // if (!data.this.employee.name) {
    //   alert('All feilds are mandatory...');
    // }
    this.service.postEmployee(data).subscribe((res) => {
      console.log(res);
      this.alert = true;
      // this.router.navigate(['/']);
      this.employee.reset({});
    });
  }

  closeAlert() {
    this.alert = false;
  }
}
