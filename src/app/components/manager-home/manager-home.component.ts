import { Component, OnInit } from "@angular/core";
import { ReimbursementDto } from "src/app/models/ReimbursementDto";
import { ReimbursementService } from "src/app/services/reimbursement/reimbursement.service";

@Component({
  selector: 'app-manager-home',
  templateUrl: './manager-home.component.html',
  styleUrls: ['./manager-home.component.css']
})
export class ManagerHomeComponent implements OnInit {

  reimbursementDtos!: ReimbursementDto[];

  user = JSON.parse(localStorage.getItem("user") || "");
  firstName = this.user.firstName;

  constructor(private reimbursementService: ReimbursementService) { }

  getAllReimbursements() {

    this.reimbursementService.getAllReimbursements().subscribe(data => {
      if(data) this.reimbursementDtos = data;
      // next: (data) => {
      //   this.reimbursementDtos = data;
      // }
    });
  }

  ngOnInit(): void {

    this.getAllReimbursements();
  }

}
