import { Component, OnInit, PipeTransform } from '@angular/core';
import { DecimalPipe } from '@angular/common';
import { FormControl } from '@angular/forms';
import { Observable, of, Subject } from 'rxjs';
import { map, startWith } from 'rxjs/operators';
import { ReimbursementService } from 'src/app/services/reimbursement/reimbursement.service';
import { ReimbursementDto } from 'src/app/models/ReimbursementDto';
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';


@Component({
  selector: 'app-reimbursement',
  templateUrl: './reimbursement.component.html',
  styleUrls: ['./reimbursement.component.css']
})
export class ReimbursementComponent implements OnInit {

  reimbursements!: Observable<ReimbursementDto[]>

  constructor ( private reimbursementService: ReimbursementService, private router: Router, private http: HttpClient ) {}

  getReimbursements(){
    this.reimbursements = this.http.get<ReimbursementDto[]>('http://localhost:8080/reimbursements');
  }

  // getReimbursementById(){
  //   this.reimbursement = this.http.get<ReimbursementDto>('http://localhost:8080/products/:id');
  // }

  // selectProduct(productId: number){
  //   this.router.navigate(['/products', productId]);
  // }


  ngOnInit(): void {
    this.getReimbursements();
    // console.log(this.getProducts);

    // this.getProductById();
  }

  // faPencil = faPencil;
  // faTrashCan = faTrashCan;

  // @Input()
  // typeId!: number;

  // type!: string;

  // @Input()
  // categories!: string[];

  // reimbursements!: ReimbursementDto[];

  // currentMonth = new Date().getMonth();

  // monthsArray: String[] = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
  // months = this.monthsArray.filter((e, index) => {
  //   return index <= this.currentMonth
  // });

  // reimbursements$: Observable<ReimbursementDto[]>;
  // filter = new FormControl('');

  // constructor(pipe: DecimalPipe, private reimbursementService: ReimbursementService) {
  //   this.reimbursements$ = this.filter.valueChanges.pipe(
  //     startWith(''),
  //     map(text => this.search(text, pipe))
  //   );
  // }

  // filterByMonth(value: string) {

  //   if (value === "all") this.transactionService.getAllTransactionsByType(this.typeId);

  //   const monthNum = this.monthsArray.indexOf(value) + 1;

  //   if (this.typeId == 1) this.type = "income"
  //   else this.type = "expenses";

  //   this.transactionService.getMonthlyTransactions(monthNum).subscribe(list => {
  //     this.records = list.filter(each => { return each.categoryType == this.type });
  //   })

  // };


  // ngOnInit(): void {

  //   this.transactionService.getAllTransactionsByType(this.typeId);

  //   this.transactionService.newTransactionList.subscribe(data => {
  //     this.records = data;
  //   });

  // }

}
