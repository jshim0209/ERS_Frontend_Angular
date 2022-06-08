import { Component, OnDestroy, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { UserRole } from 'src/app/models/UserRole';
import { AuthService } from 'src/app/services/auth/auth.service';
import { ReimbursementService } from 'src/app/services/reimbursement/reimbursement.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  errorMessage!: string;
  currentUser: any;
  userRole!: UserRole;

  constructor(
    private authService: AuthService,
    // private reimbService: ReimbursementService

    ) {}

  ngOnInit(): void {

    this.authService.loginErrorSubject.subscribe((errMsg) => {
      this.errorMessage = errMsg;
    });
  }

  onSubmit(form: NgForm) {
      const username = form.value.username;
      const password = form.value.password;
      this.authService.login(username, password);
  }

  // ngOnDestroy(): void {

  //   this.reimbService.getAllReimbursements().unsubscribe();

  //   this.reimbService.getReimbursementByUser().unsubscribe();

  // }

}
