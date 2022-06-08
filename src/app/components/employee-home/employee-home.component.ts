import { Component, OnInit } from "@angular/core";
import { ReimbursementDto } from "src/app/models/ReimbursementDto";
import { ReimbursementService } from "src/app/services/reimbursement/reimbursement.service";

@Component({
  selector: 'app-employee-home',
  templateUrl: './employee-home.component.html',
  styleUrls: ['./employee-home.component.css']
})
export class EmployeeHomeComponent implements OnInit {
  reimbursementDtos!: ReimbursementDto[];

  user = JSON.parse(localStorage.getItem("user") || "");
  userId = this.user.id;
  firstName = this.user.firstName;

  constructor(private reimbursementService: ReimbursementService) { }

  getReimbursementByUser(userId: number) {

    this.reimbursementService.getReimbursementByUser(userId).subscribe({
      next: (data) => {
        this.reimbursementDtos = data;
      }
    })
  }

  ngOnInit(): void {

    this.getReimbursementByUser(this.userId);

  }
}
