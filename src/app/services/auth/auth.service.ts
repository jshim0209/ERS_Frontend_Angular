import { HttpClient, HttpResponse } from '@angular/common/http';
import { Router } from '@angular/router';
import { BehaviorSubject, Observable, Subject } from 'rxjs';
import { environment } from 'src/environments/environment';
import { UserDto } from 'src/app/models/UserDto';
import { Injectable } from '@angular/core';
import { User } from 'src/app/models/User';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  loginErrorSubject: Subject<string> = new Subject<string>();

  private loginStatus = new BehaviorSubject<boolean>(this.checkLoginStatus());

  currentUser: any;


  userRole!: string;

  constructor(private httpClient: HttpClient, private router: Router) {}



  getUserInfoFromJwt(): Observable<HttpResponse<UserDto>> {
    return this.httpClient.get<UserDto>(`${environment.BACKEND_URL}/login`, {
      'observe': 'response',
      'headers': {
        'Authorization': `Bearer ${localStorage.getItem('jwt')}`
      },
    });
  }

  getUserRole(): string {
    this.currentUser = JSON.parse(localStorage.getItem("user_info") || "")
    return this.userRole = this.currentUser.userRole;
  }

  login(username: string, password: string) {
    this.httpClient.post<User>(`${environment.BACKEND_URL}/login`, {
      username: username,
      password: password,
    }, {
      observe: "response", // This option tells httpClient to give us the entire HttpResponse instead of just the response body,
      // which is what it would have done by default
    }).subscribe(
      (res) => {
        const jwt = res.headers.get('token');
        localStorage.setItem('jwt', JSON.stringify(jwt));
        localStorage.setItem("user_info", JSON.stringify(res.body));

        this.loginStatus.next(true);
        this.currentUser = res.body;

        if (this.currentUser.userRole == "finance_manager") {
          this.router.navigate(['manager-home']);
        } else {
          this.router.navigate(['employee-home']);
        }

      }
    , err => {
        const errorMessage = err.error;
        this.loginErrorSubject.next(errorMessage); // Publish information to the loginErrorSubject
    })
  }

  logout() {
    localStorage.removeItem("jwt");
    localStorage.removeItem("user_info");
    this.router.navigate(["login"]);
    this.loginStatus.next(false);
  }

  checkLoginStatus(): boolean {
    if (localStorage.getItem("jwt")) return true;
    return false;
  }

  get isLoggedIn() {
    return this.loginStatus.asObservable();
  }
}
