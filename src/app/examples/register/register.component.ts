import { Component, OnInit } from "@angular/core";
import { Router, NavigationEnd } from "@angular/router";
import { catchError } from "rxjs/operators";
import { UserService } from "../../services/user.service";

@Component({
  selector: "app-register",
  templateUrl: "./register.component.html",
  styleUrls: ["./register.component.css"],
})
export class RegisterComponent implements OnInit {
  data: Date = new Date();
  focus;
  focus1;
  name;
  password;
  mobile;
  cpassword;
  commisionRate;
  profilePic;
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
  register() {
    let data = {
      name: this.name,
      mobile: this.mobile,
      password: this.cpassword,
      commisionRate: this.commisionRate,
      profilePic: this.profilePic,
      uplineId: JSON.parse(localStorage.getItem("name")).uplineId
      ,
    };
    this.userService.register(data).subscribe(
      (res: any) => {
        console.log(res.status);
        if (res.name) {
          this.router.navigateByUrl("login");
        } else {
          alert("Please enter valid credentials");
        }
      },
      (err) => {
        console.log(err);
        alert("Mobile registered already");
      }
    );
    // localStorage.setItem("data",JSON.stringify(data))
    // this.router.navigateByUrl('login')
  }
  upload(e) {
    let formData = new FormData();
    let selectedFiles = e.target.files;
    let currentFileUpload = selectedFiles.item(0);
    formData.append("file", currentFileUpload);

    formData.append("labelName", "test");
    formData.append("formPart", "test");

    formData.forEach((value, key) => {
      console.log("key", key + " " + value);
    });
    console.log(formData);
    this.userService.uploadFile(formData).subscribe((res: any) => {
      console.log(res);
      this.profilePic = res.url;
    });
  }
}
