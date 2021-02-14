import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import * as firebase from "firebase";
import { AngularFireAuth } from "@angular/fire/auth";
import { switchMap } from "rxjs/operators";
import { UserService } from "./user.service";
import { ActivatedRoute } from "@angular/router";

@Injectable({
  providedIn: "root",
})
export class AuthService {
  user$: Observable<firebase.User>;

  constructor(
    private _firebase_auth: AngularFireAuth,
    private _userService: UserService,
    private _route: ActivatedRoute
  ) {
    this.user$ = _firebase_auth.authState;
  }

  async createUserWithEmail(email: string, password: string) {
    return await this._firebase_auth.createUserWithEmailAndPassword(
      email,
      password
    );
  }

  loginWithEmailAndPassword(email: string, password: string) {
    let returnUrl = this._route.snapshot.queryParamMap.get("returnUrl") || "/";
    localStorage.setItem("returnUrl", returnUrl);

    return this._firebase_auth.signInWithEmailAndPassword(email, password);
  }

  loginWithGoogle() {
    let returnUrl = this._route.snapshot.queryParamMap.get("returnUrl") || "/";
    localStorage.setItem("returnUrl", returnUrl);

    this._firebase_auth.signInWithRedirect(
      new firebase.auth.GoogleAuthProvider()
    );
  }

  logout() {
    localStorage.setItem("returnUrl", "/");
    this._firebase_auth.signOut();
  }

  get appUser$() {
    return this.user$.pipe(
      switchMap((user) => {
        if (user) {
          return this._userService.getUser(user.uid).valueChanges();
        }
        return Observable;
      })
    );
  }
}
