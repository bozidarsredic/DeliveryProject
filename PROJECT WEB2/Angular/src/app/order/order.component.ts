import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Order } from '../shared/models/order.model';
import { Product } from '../shared/models/product.model';
import { ProductSevice } from '../shared/models/product.service';
import { ToastrService } from 'ngx-toastr';
import { OrderSevice } from '../shared/models/order.service';
import { Registration } from '../shared/models/registration.model';
import { UserService } from '../shared/user.service';
import { Router } from '@angular/router';
import { timer } from 'rxjs';


declare let paypal: any;

@Component({
  selector: 'app-order',
  templateUrl: './order.component.html',
  styleUrls: ['./order.component.css']
})
export class OrderComponent implements OnInit {


   order: Order= new Order();
   a:string="a";
   price: number =100;
   coordinates: any;
   longitude: number = 0;
   latitude: number = 0;
   paypal: any;
   addScript: boolean = false;
   globalId: number = 0;
   listaproizvoda: Array<Product> = [];
   users : Registration[] = [];
   user: Registration= new Registration();
   time: Date= new Date();
   dateNow = new Date();
   vreme: Date;
   sad = new Date(new Date(this.dateNow).getTime() )
   pocetak=new Date('2022-07-06 17:59:00');
   rez: number;
   veci:number;
   manji:number;
   products : Product[] = [];
   orders : Order[] = [];
   busyy: number=0;

constructor(private router: Router,private orderservice:OrderSevice, private service:UserService,private productservice:ProductSevice,private toastr: ToastrService) {

}

  async ngOnInit() {

  this.service.getUsers().subscribe(
      (data:Registration[]) =>{
       this.users = data;
       this.users.forEach(element => {
       if(element.email==localStorage.getItem('emaill')){
          this.user=element;
        UserName: new FormControl(this.user.username, Validators.required);
       }
      });},
      error =>{
       this.toastr.error("something was wrong!");
      }
    )

    this.order.customer=localStorage.getItem('emaill');
    this.order.price=0;
    this.order.comment="good";
    this.order.quantity=1;
    this.order.address="Jevrejska 20 Novi Sad";
    this.productservice.getProducts().subscribe(
          (data:Product[]) =>{

             this.products = data;
          },
          error =>{
           this.toastr.error("something was wrong!");
          }

         )



         this.orderservice.getOrders().subscribe(
          (data:Order[]) =>{

             this.orders = data;
             this.orders.forEach(element => {

                if(element.deliverer==localStorage.getItem('emaill') ){
                  if(element.delivered==false){
                    this.busyy+=1;
                  }
                }
                     if(element.time!=null && element.time!=""){
                      if(Number(this.sad.getHours()) == Number(element.time.substring(0,2))){
                          element.min=  Number(element.time.substring(3,5))- Number(this.sad.getMinutes()) ;
                          if(element.min<1){

                            element.delivered=true;
                          }
                          }
                        else if(Number(this.sad.getHours())+1 == Number(element.time.substring(0,2))){

                            element.min=  Number(element.time.substring(3,5))+60- Number(this.sad.getMinutes()) ;
                            if(element.min<1){

                              element.delivered=true;
                            }
                          }
                        else{

                          element.delivered=true;
                        }
                   this.orderservice.updateOrder(element).subscribe(// mora se neko pretlatiti
                   data =>{

                   },
                  error=>{
                   this.toastr.error("Error");

                     }
                  );
              }

            });



           },
          error =>{
           this.toastr.error("Nesto je poslo po zlu pa nisam mogao dobaviti korisnike!");
          }

         )




    }

       changeComment(event: Event):void {
                this.order.comment=(event.target as HTMLInputElement).value
              }
       changeQuantity(event: Event):void {

          this.order.quantity=Number((event.target as HTMLInputElement).value);
        }
       changeAddress(event: Event):void {

          this.order.address=(event.target as HTMLInputElement).value;
       }

      add(product:Product){

            this.orderservice.lonLat(this.order.address).subscribe(
              data => {
                this.coordinates = data;
                this.longitude = this.coordinates.features[0].geometry.coordinates[0];
                this.latitude = this.coordinates.features[0].geometry.coordinates[1];
                this.order.lat = this.latitude;
                this.order.lon = this.longitude;
                this.order.nameOfProduct=product.nameOfProduct;
                this.order.ingredients=product.ingredients;
                this.order.priceOfProduct=product.price;
                this.order.price= this.order.quantity* product.price+200;
                this.order.customer= localStorage.getItem('emaill');
                this.orderservice.addOrder(this.order).subscribe(
                     data =>{

                      },
                      error=>{
                        this.toastr.error("Error");

                      }
                 );
              }
            )
       }

      pickUp(order:Order){
        this.vreme = new Date(new Date(this.dateNow).getTime() )
        this.order=order;
       this.order.deliverer=localStorage.getItem('emaill');
         if(this.vreme.getMinutes()>44)
         this.order.time=(this.vreme.getHours()+1).toString()+":"+(this.vreme.getMinutes()-45).toString();
         else
         this.order.time=this.vreme.getHours().toString()+":"+(this.vreme.getMinutes()+15).toString();
         this.orderservice.updateOrder(this.order).subscribe(
         data =>{

         },
         error=>{
           this.toastr.error("eror");

         }
       );
      }
      onLogout() {
        localStorage.removeItem('token');

        this.router.navigate(['user/login']);
      }


pomocna(){
  this.ngOnInit();
}

paypalConfig = {
  env: 'sandbox',
  client: {
    sandbox: 'AVRYW8PsEVx1mt4V7GBXcHHhUCnQyatrGJffvMmPJekR1QURipkCxYywPrQDEFiWunLSu4VcTdeuqGKF',
    production: 'EKYI-pyoEHDMlIQIOZkE4oKmlNgrMXHOPHydz-_SzA6X0fuHnBj_Mbu19tA6QKaRsvOaDovI8MMEN8lO'
  },
  commit: true,
  payment: (data: any, actions: any) => {
    alert("payment")
    return actions.payment.create({

      payment: {
        transactions: [

          {amount: {total: this.price, currency: 'USD'}}
        ]
      }
    });
  },
  onAuthorize: (data:any, actions:any) => {
    alert("onAuthorize")
    return actions.payment.execute().then((payment:any) => {
      this.products.forEach((item) => {
        if(item.id === this.globalId) {
          this.add(item);

        }
      })
    })
  }
}

ngAfterViewChecked(): void {
  if(!this.addScript){
    this.addPaypalScript().then(() => {
      paypal.Button.render(this.paypalConfig, '#paypal-checkout-btn');
    })
  }
}

addPaypalScript(){
  this.addScript = true;
  return new Promise((resolve, reject) => {
    let scripttagElement = document.createElement('script');
    scripttagElement.src = 'http://www.paypalobjects.com/api/checkout.js';
    scripttagElement.onload = resolve;
    document.body.appendChild(scripttagElement);
  })
}




setPayPalProduct(event: Event):void {
  this.globalId=Number((event.target as HTMLInputElement).value);
}

handleEvent(event:any){
}

}
