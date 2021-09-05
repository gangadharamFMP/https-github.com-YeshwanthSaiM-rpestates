import { Component, OnInit } from '@angular/core';
import { Router, NavigationEnd } from '@angular/router';
import { catchError } from 'rxjs/operators';
import { UserService } from "../../services/user.service";

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  data : Date = new Date();
    focus;
    focus1;
    name
    password
    mobile
    cpassword
    constructor(private router: Router,private userService: UserService) { }

    ngOnInit() {
        var body = document.getElementsByTagName('body')[0];
        body.classList.add('login-page');        
        var navbar = document.getElementsByTagName('nav')[0];
        navbar.classList.add('navbar-transparent');
    }
    ngOnDestroy(){
        var body = document.getElementsByTagName('body')[0];
        body.classList.remove('login-page');

        var navbar = document.getElementsByTagName('nav')[0];
        navbar.classList.remove('navbar-transparent');
    }
    register(){
    
      let data={
        name:this.name,
        phoneNumber:this.mobile,
        password:this.cpassword
      }
      this.userService.register(data).subscribe((res: any) => {
        console.log(res.status);
        if (res.name) {
          this.router.navigateByUrl('login')
        } else {
          alert("Please enter valid credentials");
        }
      },(err)=>{
        console.log(err)
        alert("Mobile registered already")
      });
      // localStorage.setItem("data",JSON.stringify(data))
      // this.router.navigateByUrl('login')
      
    }

}
