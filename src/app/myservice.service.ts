import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class MyserviceService {
  constructor(private http: HttpClient) {}

  getEmployeeList() {
    return this.http.get('http://localhost:3000/employees');
  }

  postEmployee(data: any) {
    return this.http.post('http://localhost:3000/employees', data);
  }

  deleteEmployee(id: any) {
    return this.http.delete(`http://localhost:3000/employees/${id}`);
  }

  getSingleEmployee(id: any) {
    return this.http.get(`http://localhost:3000/employees/${id}`);
  }

  editEmployee(id: any, data: any) {
    return this.http.put(`http://localhost:3000/employees/${id}`, data);
  }
}
