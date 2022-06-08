import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { ReimbursementDto } from 'src/app/models/ReimbursementDto';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class ReimbursementService {

  constructor(private httpClient: HttpClient) {}

  user = JSON.parse(localStorage.getItem('user') || "");
  userId = this.user.id;
  userRole = this.user.userRole.role;
  jwt = JSON.parse(localStorage.getItem('jwt') || "");

  getAllReimbursements() {
    const url = `${environment.BACKEND_URL}/reimbursements`;
    return this.httpClient.get<ReimbursementDto[]>(url, {
      'headers': {
        'Authorization': `Bearer ${this.jwt}`
      }
    });
  }

  getReimbursementByUser(userId: number) {
    const url = `${environment.BACKEND_URL}/users/${userId}/reimbursements`;
    return this.httpClient.get<ReimbursementDto[]>(url, {
      'headers': {
        'Authorization': `Bearer ${this.jwt}`
      }
    });
  }

}
