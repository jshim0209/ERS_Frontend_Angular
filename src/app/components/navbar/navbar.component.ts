import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { AuthService } from 'src/app/services/auth/auth.service';


@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  toggleDarkTheme(): void {
    document.body.classList.toggle('dark-theme');
  }
  loggedIn!: boolean;

  constructor(private router: Router) { }


  ngOnInit(): void {
    const jwt = localStorage.getItem("jwt");
    if (jwt) {
        localStorage.removeItem("jwt");
        localStorage.removeItem("userId");
        this.loggedIn = false;
      } else {
        this.loggedIn = true;
    }
  }

  ngDoCheck(): void {
    if (localStorage.getItem("jwt")) {
      this.loggedIn = true;
    }
  }

  logout(): void {
    localStorage.removeItem("jwt");
    localStorage.removeItem("userId");
    this.loggedIn = false;
    this.router.navigate(['/login'])
  }

}
