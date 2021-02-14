import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { AuthService } from 'src/app/core/services/auth.service';
import { UserApp } from 'src/app/shared/models/user.model';

@Injectable({
  providedIn: 'root'
})
export class AdminAuthGuardService {

  appUser: UserApp;

  constructor(private _auth: AuthService) {}

  canActivate(): Observable<boolean> {
    return this._auth.appUser$.pipe(
      map((appUser) => {
        console.log(appUser.isAdmin);
        return appUser.isAdmin;
      })
    );
  }
}
