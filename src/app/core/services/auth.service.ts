import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import * as firebase from "firebase";
import { AngularFireAuth } from "@angular/fire/auth";
import { switchMap } from "rxjs/operators";
import { UserService } from "./user.service";
import { ActivatedRoute, Router } from "@angular/router";
import { UserModel } from "src/app/shared/models/user.model";

@Injectable({
  providedIn: "root",
})
export class AuthService {
  userFire$: Observable<firebase.User> = this.firebase_auth.authState;

  constructor(
    private firebase_auth: AngularFireAuth,
    private userService: UserService,
    private route: ActivatedRoute,
    private router: Router
  ) {}

  // create user using email & password
  async createUserWithEmail(email: string, password: string) {
    return await this.firebase_auth.createUserWithEmailAndPassword(
      email,
      password
    );
  }

  // login using email and password
  loginWithEmailAndPassword(email: string, password: string) {
    // get current route or get home route
    let returnUrl = this.route.snapshot.queryParamMap.get("returnUrl") || "/";

    // save the route to local storage
    localStorage.setItem("returnUrl", returnUrl);

    // login using firebase auth
    return this.firebase_auth.signInWithEmailAndPassword(email, password);
  }

  // login with google
  loginWithGoogle() {
    // get current route or get home route
    let returnUrl = this.route.snapshot.queryParamMap.get("returnUrl") || "/";

    // save the route to local storage
    localStorage.setItem("returnUrl", returnUrl);

    // login using firebase auth (google)
    this.firebase_auth.signInWithRedirect(
      new firebase.auth.GoogleAuthProvider()
    );
  }

  logout() {
    // set the return url
    const returnUrl = "/";

    // go to returned url
    this.router.navigateByUrl(returnUrl);

    // user sign out
    this.firebase_auth.signOut();
  }

  get user$(): Observable<UserModel> {
    return this.userFire$.pipe(
      switchMap((user) => {
        if (user) {
          return this.userService.getUser(user.uid).valueChanges();
        }
        return [];
      })
    );
  }
}
