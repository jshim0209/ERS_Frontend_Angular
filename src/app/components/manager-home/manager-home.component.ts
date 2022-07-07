import { Component, Input, OnInit } from "@angular/core";
import { FormGroup } from "@angular/forms";
import { ReimbursementDto } from "src/app/models/ReimbursementDto";
import { Status } from "src/app/models/Status";
import { ReimbursementService } from "src/app/services/reimbursement/reimbursement.service";

@Component({
  selector: 'app-manager-home',
  templateUrl: './manager-home.component.html',
  styleUrls: ['./manager-home.component.css']
})
export class ManagerHomeComponent implements OnInit {

  @Input() status!: Status;

  reimbursementDtos!: ReimbursementDto[];
  firstName = localStorage.getItem('firstName');
  statusArray: String[] = ["Pending", "Approved", "Rejected"];
  value!: string;

  constructor(
    private reimbursementService: ReimbursementService,
    ) { }

  getAllReimbursements() {

    this.reimbursementService.getAllReimbursements().subscribe(data => {
      if(data) this.reimbursementDtos = data;
    });
  }

  filterByStatus(value: string) {
    localStorage.setItem('status', value);
    if (value == "All") {
      this.reimbursementService.getAllReimbursements();
    } else {
      this.reimbursementService.getReimbursementByStatus(this.value).subscribe(data => {
        if(data) this.reimbursementDtos = data;
      })
    }
  }

  ngOnInit(): void {
    this.getAllReimbursements();
  }
}
