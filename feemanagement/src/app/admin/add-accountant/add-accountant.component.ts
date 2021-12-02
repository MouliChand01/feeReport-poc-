import { Component, OnInit } from '@angular/core';
import { MyServicesService } from 'src/app/my-services.service';

@Component({
  selector: 'app-add-accountant',
  templateUrl: './add-accountant.component.html',
  styleUrls: ['./add-accountant.component.css']
})
export class AddAccountantComponent implements OnInit {

  constructor(private src:MyServicesService) { }

  ngOnInit(): void {
  }

  Mydata(val:any){
    this.src.postaccount(val).subscribe()
    console.log(val);
    alert("Thank you u are added one New Record")
    
  }

}
