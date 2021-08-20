import { Component, OnInit } from "@angular/core";
import { Router, NavigationEnd } from "@angular/router";

@Component({
  selector: "app-login",
  templateUrl: "./login.component.html",
  styleUrls: ["./login.component.scss"],
})
export class LoginComponent implements OnInit {
  data: Date = new Date();
  focus;
  focus1;
  mobile;
  password;
  constructor(private router: Router) {}

  ngOnInit() {
    var body = document.getElementsByTagName("body")[0];
    body.classList.add("login-page");

    var navbar = document.getElementsByTagName("nav")[0];
    navbar.classList.add("navbar-transparent");
  }
  ngOnDestroy() {
    var body = document.getElementsByTagName("body")[0];
    body.classList.remove("login-page");

    var navbar = document.getElementsByTagName("nav")[0];
    navbar.classList.remove("navbar-transparent");
  }
  login() {
    let data=JSON.parse(localStorage.getItem("data"))

    if (data && this.mobile == data.mobile && this.password == data.password) {
       
        localStorage.setItem("loggedIn","true")
      this.router.navigateByUrl("details");
    } else {
      alert("invalid credentials");
    }
  }
}
