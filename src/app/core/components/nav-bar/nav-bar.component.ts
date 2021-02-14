import { Component, OnInit } from "@angular/core";
import { UserApp } from "./../../../shared/models/user.model";
import { AuthService } from "../../services/auth.service";

@Component({
  selector: "app-nav-bar",
  templateUrl: "./nav-bar.component.html",
  styleUrls: ["./nav-bar.component.css"],
})
export class NavBarComponent implements OnInit {
  userApp: UserApp;

  constructor(private _auth: AuthService) {}

  async ngOnInit() {
    this._auth.appUser$.subscribe((userApp) => (this.userApp = userApp));    
  }

  logout() {
    this._auth.logout();    
  }
}
