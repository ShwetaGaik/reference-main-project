import { Component, OnInit } from '@angular/core';
import { GlobalConstants } from '../common/global-constants';
import { Router } from '@angular/router';

@Component({
  selector: 'app-deleteadmin',
  templateUrl: './deleteadmin.component.html',
  styleUrls: ['./deleteadmin.component.css']
})
export class DeleteadminComponent implements OnInit {
  empdetail:any
  usrname:any
  usrtype:any
  mgr:any

  async getuserdet(){
    let url="https://localhost:8000/api/User/GetUser"
    let obj={
      // "id":"02-07-2022-20-43-35",
      "id":"",
      "loginId": this.empdetail.loginId
    }
    let res=await fetch(url,{
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      },
      method:"POST",
      body:JSON.stringify(obj)
  
      
    })
    let apires;
    apires=await res.json()
    this.usrtype=apires.userTypeId
    this.mgr=apires.managerUserId
  }

















  async chkdelete(){
    let url="https://localhost:8000/api/User/DeleteUser"
    let obj={
      
        "id": this.empdetail.id,
        "loginId": this.empdetail.loginId
      
      
      
    }
    let res=await fetch(url,{
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      },
      method:"POST",
      body:JSON.stringify(obj)
  
      
    })
    let apires;
    apires=await res.json()


    this.router.navigateByUrl("/modify")
    // console.log(apires);
    // GlobalConstants.display=true
    // if(res.ok){}
      //  this.route1()
      
      
    
    // this.router.navigateByUrl("/login")
    
  
    
  }
  route(){
    this.router.navigateByUrl("/modify")
    

  }
 

  constructor(private router: Router) {}

  ngOnInit(): void {
    this.empdetail=GlobalConstants.detail
    this.usrname=GlobalConstants.username
    console.log(this.empdetail);
    console.log(this.usrname);
    GlobalConstants.display=true;
    this.getuserdet();
    
  }

}
