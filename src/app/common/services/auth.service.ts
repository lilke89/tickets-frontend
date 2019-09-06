import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {tap} from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private httpClient: HttpClient) {
  }

  login(username: string, password: string) {
    console.log(username);
    return this.httpClient.post<{ access_token: string }>
    ('http://localhost:3000/auth/login', {username, password}).pipe(
      tap(res => {
        console.log(res);
        localStorage.setItem('access_token', res.access_token);
    }));
  }

  register(username: string, password: string, email: string) {
    return this.httpClient.post<{access_token: string}>('http://localhost:3000/auth/register', {username, password, email}).pipe(tap(() => {
      this.login(username, password);
    }));
  }

  logout() {
    localStorage.removeItem('access_token');
  }

  public get loggedIn(): boolean {
    return localStorage.getItem('access_token') !==  null;
  }
}
