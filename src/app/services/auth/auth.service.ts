import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import { BehaviorSubject, Subject } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Injectable } from '@angular/core';
import { User } from 'src/app/models/User';
import { UserRole } from 'src/app/models/UserRole';

@Injectable({
  providedIn: 'root'
})

export class AuthService {

  loginErrorSubject: Subject<string> = new Subject<string>();

  public loginStatus: BehaviorSubject<boolean> = new BehaviorSubject<boolean>(false);

  currentUser: any;
  userRole!: UserRole;

  constructor(private httpClient: HttpClient, private router: Router) {}

  login(username: string, password: string)  {
    return this.httpClient.post<User>(`${environment.BACKEND_URL}/login`, {
      username: username,
      password: password,
    },
    {
      observe: 'response'
    })
    .subscribe({
      next: (res) => {
        const jwt = res.headers.get('token');
        localStorage.setItem('jwt', JSON.stringify(jwt));
        localStorage.setItem('user', JSON.stringify(res.body));

        this.loginStatus.next(true);
        this.currentUser = res.body;

        console.table(this.currentUser);
        console.log(this.currentUser.userRole);

        // this.currentUser.userRole == 'finance_manager' ? this.router.navigate(['manager-home']) : this.router.navigate(['employee-home']);

        if (this.currentUser.userRole == 'finance_manager') {
          this.router.navigate(['manager-home']);
        } else {
          this.router.navigate(['employee-home']);
        }
      },
      error: (e) => {
        const errorMessage = e.error;
        this.loginErrorSubject.next(errorMessage);
      }
    });
  }

  logout() {
    localStorage.removeItem("jwt");
    localStorage.removeItem("user");
    localStorage.removeItem(this.currentUser);
    this.loginStatus.next(false);
    this.router.navigate(["/login"]);
  }

}
