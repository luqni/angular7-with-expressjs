import { Component, OnInit } from '@angular/core';
import { CustomerService } from '../customer.service';
import { Customer } from '../customer';
import { Router } from '@angular/router';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-list-customer',
  templateUrl: './list-customer.component.html',
  styleUrls: ['./list-customer.component.css']
})
export class ListCustomerComponent implements OnInit {
  listCustomer:Customer[] = [];
  customerFormGroup:FormGroup;
  customer:Customer;
  


  constructor(private customerService:CustomerService, private router:Router, private formBuilder:FormBuilder) { }

  ngOnInit() {
    this.loadData();
    this.customerFormGroup = this.formBuilder.group({
      id:[''],
      firsname:['',Validators.required],
      lastname:['',Validators.required],
      birthdate:['',Validators.required],
      username:[''],
      password:[''],
      phonenumber:['',Validators.required],
      phonetype:['',Validators.required]
    });
    
  }
  loadData(){
    this.customerService.getLish().subscribe((response)=>{
      console.log(JSON.stringify(response));
      this.listCustomer=[];
      Object.assign(this.listCustomer, response);
    },(err)=>{
      alert('error :'+JSON.stringify(err));
    });
  }
  submitData(){
    let customer:Customer = new Customer();
    
    customer.firsname = this.customerFormGroup.controls['firsname'].value;
    customer.lastname = this.customerFormGroup.controls['lastname'].value;
    customer.username = this.customerFormGroup.controls['username'].value;
    customer.password = this.customerFormGroup.controls['password'].value;
    customer.birthdate = this.customerFormGroup.controls['birthdate'].value;
    customer.phonetype = this.customerFormGroup.controls['phonetype'].value;
    customer.phonenumber = this.customerFormGroup.controls['phonenumber'].value;

    this.customerService.insertcustomer(customer).subscribe((response)=>{
      console.log(JSON.stringify(response));
      location.reload();
    },(err)=>{
      alert('error : '+JSON.stringify(err));
    });
  }
  deleteCustomer(id){
    if(confirm('Mau hapus  ?')){
      this.customerService.deletecustomer(id).subscribe(res=>{
        alert('berhasil');
        this.loadData();
      },err=>{
        alert('hapus gagal');
      });
    }
    
  }

}
