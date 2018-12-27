import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import { Customer } from './customer';

@Injectable({
  providedIn: 'root'
})
export class CustomerService {

  constructor(private httpClient:HttpClient) { }

  getLish(){
    return this.httpClient.get('http://localhost:3000/customers');
  }
  insertcustomer(customer:Customer){
    return this.httpClient.post('http://localhost:3000/customer',customer);
  }
  deletecustomer(customer:Customer){
    return this.httpClient.delete('http://localhost:3000/customer'+customer.id);
  }


}
