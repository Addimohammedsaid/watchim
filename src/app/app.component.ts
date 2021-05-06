import { Component } from "@angular/core";
import { AuthService } from "./core/services/auth.service";
import { UserService } from "./core/services/user.service";
import { Router, ActivatedRoute } from "@angular/router";

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.css"],
})
export class AppComponent {
  title = "RoyalAnime";

  constructor(
    private auth: AuthService,
    private userService: UserService,
    private router: Router,
    private route: ActivatedRoute
  ) {
    auth.userFire$.subscribe((user) => {
      if (!user) return;

      let returnUrl = localStorage.getItem("returnUrl");
      if (!returnUrl) return;

      localStorage.removeItem("returnUrl");
      router.navigateByUrl(returnUrl);
    });
  }
}
