import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
  
})
export class AppComponent {
  title = 'AngularProject';
  async chkclick(){
    let url="https://localhost:8000/api/User/GetAllUsers"
    let res=await fetch(url)
    let apires;
    apires=await res.json()
    console.log(apires)
  }

  async chkclick1(){
    let url="https://localhost:8000/api/JourneyTickets/GetAllRequests"
    let obj={
      "id":"02-07-2022-20-43-35",
      "loginId": "employee0015@employee.com"
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
    console.log(apires)
  }

 
}
