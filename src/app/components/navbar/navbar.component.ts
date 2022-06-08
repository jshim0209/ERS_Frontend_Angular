import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/services/auth/auth.service';


@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  loginStatus!: boolean;

  constructor(private authService: AuthService) { }

  ngOnInit(): void {
    this.authService.loginStatus.subscribe( value => {
      this.loginStatus = value;
    })

  }

  onLogout() {
    this.authService.logout();
  }

}
