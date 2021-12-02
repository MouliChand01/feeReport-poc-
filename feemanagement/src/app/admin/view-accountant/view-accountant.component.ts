import { Component, OnInit } from '@angular/core';
import { MyServicesService } from 'src/app/my-services.service';

@Component({
  selector: 'app-view-accountant',
  templateUrl: './view-accountant.component.html',
  styleUrls: ['./view-accountant.component.css']
})
export class ViewAccountantComponent implements OnInit {

  accountdata:any;

  constructor(private src:MyServicesService) { }

  ngOnInit(): void {
    this.refreshData()
    }

    refreshData(){
      this.src.getaccount().subscribe((data)=>this.accountdata=data);
    }

    datadisplay(){
      console.log(this.accountdata)
    }

    Deldata(id:any){
      this.src.DelAccount(id).subscribe(()=>this.refreshData())
    }

}
