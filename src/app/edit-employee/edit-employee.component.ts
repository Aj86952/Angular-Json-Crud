import { Component, OnInit } from '@angular/core';
import { MyserviceService } from '../myservice.service';
import { ActivatedRoute, Router } from '@angular/router';
import { FormGroup, FormControl } from '@angular/forms';

@Component({
  selector: 'app-edit-employee',
  templateUrl: './edit-employee.component.html',
  styleUrls: ['./edit-employee.component.css'],
})
export class EditEmployeeComponent implements OnInit {
  employee = new FormGroup({
    name: new FormControl(''),
    city: new FormControl(''),
    email: new FormControl(''),
  });

  myId: any;
  constructor(
    private service: MyserviceService,
    private route: ActivatedRoute,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.myId = this.route.snapshot.params['id'];
    console.log(this.myId);

    this.service.getSingleEmployee(this.myId).subscribe((result: any) => {
      this.employee = new FormGroup({
        name: new FormControl(result['name']),
        city: new FormControl(result['city']),
        email: new FormControl(result['email']),
      });
    });
  }

  onSubmit(data: any) {
    this.service.editEmployee(this.myId, data).subscribe((res: any) => {
      console.log(res);
      this.router.navigate(['/']);
    });
  }
}
