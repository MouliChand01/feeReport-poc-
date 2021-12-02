import { Component, OnInit } from '@angular/core';
import { MyServicesService } from 'src/app/my-services.service';

@Component({
  selector: 'app-add-student',
  templateUrl: './add-student.component.html',
  styleUrls: ['./add-student.component.css']
})
export class AddStudentComponent implements OnInit {

  constructor(private src:MyServicesService) { }

  ngOnInit(): void {
  }

  AddStudent(data:any){
     this.src.postStudent(data).subscribe();
     console.log(data);
     alert("Thank you u are added one New Record");
  }

}
