import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Product } from '../shared/models/product.model';
import { ProductSevice } from '../shared/models/product.service';
import { ToastrService } from 'ngx-toastr';
import { Router } from '@angular/router';
import { UserService } from '../shared/user.service';
import { Registration } from '../shared/models/registration.model';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit {
  productForm = new FormGroup({
    Name : new FormControl("giros", Validators.required ),
    Price : new FormControl("400", Validators.required ),
    Ingredients : new FormControl("luk,pomfrit", Validators.required ),
  });
  constructor(private router: Router,private productservice:ProductSevice, private toastr: ToastrService,private service:UserService) { }

  ngOnInit() {

   this.service.getUserByEmail(localStorage.getItem('emaill')).subscribe(
    (data:Registration) =>{
     if(data.type!="ADMINISTRATOR"){
      this.router.navigateByUrl('/ud');
     }
      },
    error =>{
     this.toastr.error("something was wrong!");
    }

   )

  }
  onSubmit() {
    let product:Product = new Product();
    product.nameOfProduct = this.productForm.controls['Name'].value;
    product.price = this.productForm.controls['Price'].value;
    product.ingredients = this.productForm.controls['Ingredients'].value;
    this.productservice.addProduct(product).subscribe(// mora se neko pretlatiti
    data =>{

    },
    error=>{
      this.toastr.error("Error");

    }
  );


  }
}




