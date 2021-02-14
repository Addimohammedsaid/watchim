import { Router } from '@angular/router';
import { Injectable } from '@angular/core';
import { RouterStateSnapshot } from '@angular/router';
import { AuthService } from 'src/app/core/services/auth.service';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class AuthGuardService {
  constructor(private _auth: AuthService, private router: Router) {}

  canActivate(route, state: RouterStateSnapshot) {
    return this._auth.user$.pipe(
      map((user) => {
        if (user) return true;
        this.router.navigate(["/login"], {
          queryParams: { returnUrl: state.url },
        });
        return false;
      })
    );
  }
}
