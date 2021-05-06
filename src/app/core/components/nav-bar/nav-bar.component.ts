import { Component, OnInit } from "@angular/core";
import { UserModel } from "./../../../shared/models/user.model";
import { AuthService } from "../../services/auth.service";

@Component({
  selector: "app-nav-bar",
  templateUrl: "./nav-bar.component.html",
  styleUrls: ["./nav-bar.component.css"],
})
export class NavBarComponent implements OnInit {
  user: UserModel;

  constructor(private auth: AuthService) {}

  async ngOnInit() {
    // subscribe to user data
    this.auth.user$.subscribe((user) => (this.user = user));
  }

  // logout
  logout() {
    this.auth.logout();
  }
}
