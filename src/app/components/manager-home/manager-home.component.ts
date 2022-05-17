import { Component, Input, OnInit } from "@angular/core";
import { Router } from "@angular/router";
import { ReimbursementDto } from "src/app/models/ReimbursementDto";
import { UserDto } from "src/app/models/UserDto";
import { AuthService } from "src/app/services/auth/auth.service";
import { ReimbursementService } from "src/app/services/reimbursement/reimbursement.service";


@Component({
  selector: 'app-manager-home',
  templateUrl: './manager-home.component.html',
  styleUrls: ['./manager-home.component.css']
})
export class ManagerHomeComponent implements OnInit {
  reimbursementDtos!: ReimbursementDto[];

  url!: string;
  user = JSON.parse(localStorage.getItem("user_info") || "");
  firstName = this.user.firstName;

  constructor(private authService: AuthService, private router: Router, private reimbursementService: ReimbursementService) { }

  ngOnInit(): void {
    this.reimbursementService.getAllReimbursements().subscribe((data) => {
      this.reimbursementDtos = data;
    });


  }

}
