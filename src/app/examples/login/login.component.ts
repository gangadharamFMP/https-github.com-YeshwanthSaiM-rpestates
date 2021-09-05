import { Component, OnInit } from "@angular/core";
import { Router, NavigationEnd } from "@angular/router";
import { UserService } from "../../services/user.service";

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
  constructor(private router: Router, private userService: UserService) {}

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
    let data = {
      phoneNumber: this.mobile,
      password: this.password,
    };
    this.userService.login(data).subscribe((res: any) => {
      console.log(res);
      if (res.name) {
        localStorage.setItem("loggedIn", "true");
        localStorage.setItem("name", res.name);
        this.router.navigateByUrl("details");
      } else {
        alert("Please enter valid credentials");
      }
    });

  }
}
