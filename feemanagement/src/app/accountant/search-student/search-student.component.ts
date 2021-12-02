import { Component, OnInit } from '@angular/core';
import { MyServicesService } from 'src/app/my-services.service';

@Component({
  selector: 'app-search-student',
  templateUrl: './search-student.component.html',
  styleUrls: ['./search-student.component.css']
})
export class SearchStudentComponent implements OnInit {

  constructor(private src:MyServicesService) { }
  id:any
  ngOnInit(): void {
  }

}
