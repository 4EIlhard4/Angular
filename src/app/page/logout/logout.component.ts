import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-logout',
  templateUrl: './logout.component.html',
  styleUrls: ['./logout.component.css']
})
export class LogoutComponent implements OnInit{

  user: any = "";


  constructor(private auth:AuthService, private router:Router){};

  ngOnInit(){
    this.user = this.auth.getUser()?.displayName;
    if(this.user == null){
      this.user = this.auth.getUser()?.email;
    }
  }  

  salir()
  {
    this.auth.logout().then(res =>{
      this.router.navigate(["/home"])
    }).catch(error=>{
      console.log(error);
    })
  }
}
