import { Component, OnInit } from "@angular/core";
import { AuthService } from "../../services/auth.service";
import { FormGroup, FormControl } from "@angular/forms";

@Component({
  selector: "app-login",
  templateUrl: "./login.component.html",
  styleUrls: ["./login.component.css"],
})
export class LoginComponent implements OnInit {
  //init form
  profileForm = new FormGroup({
    email: new FormControl(""),
    password: new FormControl(""),
  });

  //
  error: string;

  constructor(private _auth: AuthService) {}

  ngOnInit() {}

  loginWithGoogle() {
    this._auth.loginWithGoogle();
  }

  async loginWithEmailAndPassword() {
    await this._auth
      .loginWithEmailAndPassword(
        this.profileForm.value.email,
        this.profileForm.value.password
      )
      .catch((error) => (this.error = error));
  }

  loginWithPhoneNumber() {}
}
