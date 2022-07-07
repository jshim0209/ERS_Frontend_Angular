import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
// import { AuthService } from 'src/app/services/auth/auth.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  constructor(
    private router: Router,
    // private authService: AuthService
    ) { }

  ngOnInit(): void {
    // this.checkRouterLink();
    // this.authService
  }

  logout() {
    localStorage.clear();
    // this.loggedIn = false;
    this.router.navigate(['/login']);
  }

  isLoggedIn(){
    if(localStorage.getItem('jwt') != null) {
      return true;
    } else {
      return false;
    }
  }


  // isLoggedIn() {
  //   let jwt = localStorage.getItem('jwt');
  //   let userRole = localStorage.getItem('userRole');
  //   if (jwt != null && userRole) {
  //     let validJwt = false;
  //     this.authService.authUser({ jwt: jwt, userRole: userRole}).subscribe({
  //       next: (response) => {
  //         if (response.status == 200) {
  //           validJwt = true;
  //           this.authService.loginNotification.emit();
  //         } else {
  //           this.authService.logoutNotification.emit();
  //         }
  //       },
  //       error: (error) => {
  //         console.log(error);
  //         this.authService.logoutNotification.emit();
  //       }
  //     });
  //     return validJwt;
  //   } else {
  //     return false;
  //   }
  // }

  // checkRouterLink() {
  //   if (this.router.url == '/home' || this.router.url == '/filterBy?') {
  //     return true;
  //   }
  //   return false;
  // }
}
