import { Component, Input, OnInit } from "@angular/core";
import { ReimbursementDto } from "src/app/models/ReimbursementDto";
import { Status } from "src/app/models/Status";
import { ReimbursementService } from "src/app/services/reimbursement/reimbursement.service";

@Component({
  selector: 'app-employee-home',
  templateUrl: './employee-home.component.html',
  styleUrls: ['./employee-home.component.css']
})
export class EmployeeHomeComponent implements OnInit {

  @Input() status!: Status;

  reimbursementDtos!: ReimbursementDto[];
  firstName = localStorage.getItem('firstName');
  userId = localStorage.getItem('userId');
  statusArray: String[] = ["Pending", "Approved", "Rejected"];
  value!: string;

  constructor(
    private reimbursementService: ReimbursementService
    ) { }

  getReimbursementByUser(userId: string|null) {

    this.reimbursementService.getReimbursementByUser(this.userId).subscribe({
      next: (data) => {
        this.reimbursementDtos = data;
      }
    })
  }

  // filterByStatus(value: string) {
  //   localStorage.setItem('status', value);
  //   if (value == "All") {
  //     this.reimbursementService.getAllReimbursements();
  //   } else {
  //     this.reimbursementService.getReimbursementByStatus(this.value).subscribe(data => {
  //       if(data) this.reimbursementDtos = data;
  //     })
  //   }
  // }

  ngOnInit(): void {
    this.getReimbursementByUser(this.userId);
  }
}
