import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit{
  user: any = "";

  constructor(private auth:AuthService, private router:Router){};

  ngOnInit(){
    this.user = this.auth.getUser()?.displayName;
    if(this.user == null){
      this.user = this.auth.getUser()?.email;
    }
  } 

  salir(){
    this.auth.logout().then(res =>{
        this.router.navigate(["/home"])
    }).catch(error=>{
        console.log(error)
    })
  }
}
