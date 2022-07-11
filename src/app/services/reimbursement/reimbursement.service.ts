import { HttpClient } from '@angular/common/http';
import { Injectable, Input } from '@angular/core';
import { ReimbursementDto } from 'src/app/models/ReimbursementDto';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class ReimbursementService {

  constructor(private httpClient: HttpClient) {}

  userId = localStorage.getItem('userId');
  userRole = localStorage.getItem('userRole');
  jwt = localStorage.getItem('jwt');
  status = localStorage.getItem('status');

  getAllReimbursements() {
    const url = `${environment.BACKEND_URL}/reimbursements`;
    return this.httpClient.get<ReimbursementDto[]>(url, {
    });
  }

  getReimbursementByUser(userId: string|null) {
    console.log(userId);
    const url = `${environment.BACKEND_URL}/users/${userId}/reimbursements`;
    return this.httpClient.get<ReimbursementDto[]>(url, {
    });
  }

  getReimbursementByStatus(status: string|null) {
    console.log(localStorage.getItem('status'));
    status = localStorage.getItem('status');
    const url = `${environment.BACKEND_URL}/reimbursements?status=${status}`;
    return this.httpClient.get<ReimbursementDto[]>(url, {

    });
  }

}
