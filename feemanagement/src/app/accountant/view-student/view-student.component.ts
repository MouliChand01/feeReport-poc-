import { Component, OnInit } from '@angular/core';
import { MyServicesService } from 'src/app/my-services.service';

@Component({
  selector: 'app-view-student',
  templateUrl: './view-student.component.html',
  styleUrls: ['./view-student.component.css']
})
export class ViewStudentComponent implements OnInit {

  constructor(private src:MyServicesService) { }

  studentdata:any;

  ngOnInit(): void {
    this.getStudentdata()
  }

  getStudentdata(){
    this.src.getStudent().subscribe((e)=>(this.studentdata=e))
  }

  Deldata(id:any){
    this.src.DelStudent(id).subscribe();
    this.getStudentdata();
  }

}
