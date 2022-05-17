import { Component, Input, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { ReimbursementService } from 'src/app/services/reimbursement/reimbursement.service';
import { UserRole } from 'src/app/models/UserRole';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent implements OnInit {

  @Input()
  typeId!: number;
  user = JSON.parse(localStorage.getItem("user_info") || "");
  userId = this.user.id;
  userRole = this.user.userRole;

  form!: FormGroup;
  amount!: number;
  timeSubmitted!: string;
  description!: string;
  receipt!: string;


  constructor() { }

  ngOnInit(): void {
  }

}
