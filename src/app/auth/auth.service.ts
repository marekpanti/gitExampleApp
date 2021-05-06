import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { AuthService } from '@auth0/auth0-angular';
import { Observable } from 'rxjs';
import { UserInterface } from '../shared/user.interface';

@Injectable({ providedIn: 'root' })
export class AuthGitService {
  constructor(private http: HttpClient, public auth: AuthService) {}

  logIn() {
    return this.auth.loginWithRedirect();
  }

  logOut() {
      return this.auth.logout();
  }

  getUser(): Observable<UserInterface> {
      return this.auth.user$;
  }
}
