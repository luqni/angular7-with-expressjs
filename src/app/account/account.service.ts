import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class AccountService {

  constructor(private httpClient:HttpClient) { }

  getListAccount(){
    return this.httpClient.get('http://localhost:3000/accounts');
  }
}
