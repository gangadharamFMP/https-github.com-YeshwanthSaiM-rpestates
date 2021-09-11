import { Injectable } from "@angular/core";
import { of, throwError } from "rxjs";
import { catchError, tap, map } from "rxjs/operators";
import { HttpClient } from "@angular/common/http";
import { environment } from "../../environments/environment";

@Injectable({
  providedIn: "root",
})
export class UserService {
  public secretKey;
  public isloggedIn=false
  isLoggedin = false;
  constructor(private http: HttpClient) {}

  login(data) {
    return this.http.post(environment.hostURL + "/login", data);
  }

  register(data) {
    return this.http.post(environment.hostURL + "/register", data);
  }

  uploadFile(data){
    console.log("data",data)
    return this.http.post(environment.hostURL + "/upload", data);
  }
}
