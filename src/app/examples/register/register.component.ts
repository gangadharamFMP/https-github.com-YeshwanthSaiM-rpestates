import { Component, OnInit } from '@angular/core';
import { Router, NavigationEnd } from '@angular/router';

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
    constructor(private router: Router) { }

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
        mobile:this.password,
        password:this.cpassword
      }
      localStorage.setItem("data",JSON.stringify(data))
      this.router.navigateByUrl('login')
      
    }

}
