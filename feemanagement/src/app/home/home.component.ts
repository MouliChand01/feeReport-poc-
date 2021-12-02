import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  login={
    email:"",
    pass:""
  }
  account={
    email:"",
    pass:""
  }
  constructor(private rou:Router) { }
  ngOnInit(): void {
  }

  Mylogin(){
    if (this.login.email==="mouli.ramadasu@ojas-it.com" && this.login.pass==="mouli"){
      this.rou.navigate(["admin"])
    }
    else{
      alert("Enter incorrect Email and Password ...please check once")
    }
  }

  Accountlogin(){
    if (this.account.email==="mouli.ramadasu@ojas-it.com" && this.account.pass==="mouli"){
      this.rou.navigate(["accountant"])
    }
    else{
      alert("Enter incorrect Email and Password ...please check once")
    }
  }

}
