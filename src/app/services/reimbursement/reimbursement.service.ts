import { HttpClient, HttpHeaders, HttpResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { catchError, Observable, of, Subject } from 'rxjs';
import { ReimbursementDto } from 'src/app/models/ReimbursementDto';
import { environment } from 'src/environments/environment';
import { AuthService } from '../auth/auth.service';

@Injectable({
  providedIn: 'root'
})
export class ReimbursementService {

  newTransactionList: Subject<ReimbursementDto[]> = new Subject();


  constructor(private httpClient: HttpClient, private authService: AuthService) {}

  user = JSON.parse(localStorage.getItem("user_info") || "");
  userId = this.user.id;
  userRole = this.user.userRole.role;
  jwt = JSON.parse(localStorage.getItem('jwt') || "");



  getAllReimbursements() {
    return this.httpClient.get<ReimbursementDto[]>('http://localhost:8081/reimbursements', {
      'headers': {
        'Authorization': `Bearer ${this.jwt}`
      }
    }).pipe(catchError(this.handleError<ReimbursementDto[]>('getAllReimbursements', [])))
}


  private handleError<T> (operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {
      console.error(error);
      return of(result as T);
    }
  };

}
