import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class MyServicesService {

  accountant_url="http://localhost:3000/accountants";
  student_url="http://localhost:3000/students";

  constructor(private http:HttpClient) { }

  getaccount(){
    return this.http.get(this.accountant_url)
  }

  postaccount(data:any){
    return this.http.post(this.accountant_url,data)
  }

  DelAccount(id:any){
    return this.http.delete(`${this.accountant_url}/${id}`)
  }
  getStudent(){
    return this.http.get(this.student_url)
  }

  postStudent(data:any){
    return this.http.post(this.student_url,data)
  }

  DelStudent(id:any){
    return this.http.delete(`${this.student_url}/${id}`)
  }
}
