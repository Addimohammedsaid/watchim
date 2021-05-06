import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { map } from "rxjs/operators";
import { AuthService } from "src/app/core/services/auth.service";
import { UserModel } from "src/app/shared/models/user.model";

@Injectable({
  providedIn: "root",
})
export class AdminAuthGuardService {
  user: UserModel;

  constructor(private auth: AuthService) {}

  canActivate(): Observable<boolean> {
    return this.auth.user$.pipe(
      map((user) => {
        return user.isAdmin;
      })
    );
  }
}
