import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { Registration } from '../shared/models/registration.model';
import { UserDisplay } from '../shared/models/user-display.model';
import { UserService } from '../shared/user.service';

@Component({
  selector: 'app-ud',
  templateUrl: './ud.component.html',
  styleUrls: ['./ud.component.css']
})
export class UdComponent implements OnInit {

  users : Registration[] = [];
  user: Registration= new Registration();
  pom:string="";

  public a:Registration;

  registrationForm = new FormGroup({
     Image: new FormControl()
  });

  constructor(private route:ActivatedRoute, private service:UserService,private router: Router, private toastr: ToastrService) { }


  ngOnInit() {

    this.service.getUsers().subscribe(
     (data:Registration[]) =>{

        this.users = data;



     },
     error =>{
      this.toastr.error("something was wrong!");
     }

    )

    this.service.getUserByEmail(localStorage.getItem('emaill')).subscribe(
      (data:Registration) =>{
       this.user=data;
        },
      error =>{
       this.toastr.error("something was wrong!");
      }

     )






 }

 onLogout() {
     localStorage.removeItem('token');
     this.router.navigate(['/user/login']);
   }

onSubmit(){

  }

   changeUsername(event: Event):void {
   this.user.username=(event.target as HTMLInputElement).value
   }
   changeNameAndLastName(event: Event):void {
   this.user.nameAndLastName=(event.target as HTMLInputElement).value
   }
   changeDateOfBirth(event: Event):void {
     this.user.dateOfBirth=(event.target as HTMLInputElement).value
   }
   changeAddress(event: Event):void {
     this.user.address=(event.target as HTMLInputElement).value

   }
   changePassword(event: Event):void {
     this.user.password=(event.target as HTMLInputElement).value
   }
   changeImage(event: Event):void {
    this.user.image=(event.target as HTMLInputElement).value

  }
 save(){

     if(this.user.username.length<1){
     alert("username is required")
     }
     else if(this.user.address.length<1)
         alert("address is required")
     else if(this.user.nameAndLastName.length<1)
         alert("name and lastname is required")
     else if(this.user.dateOfBirth.length<1)
         alert("date of birth is required")
     else if(this.user.password.length<1)
         alert("password is required")
     else{


       this.pom  =(document.getElementById('customFile')as HTMLInputElement).value.substring(12,(document.getElementById('customFile')as HTMLInputElement).value.length)

      if(this.pom !==''){

         this.user.image=(document.getElementById('customFile')as HTMLInputElement).value.substring(12,(document.getElementById('customFile')as HTMLInputElement).value.length)
      }


       this.service.update(this.user).subscribe(
       data =>{


       },
       error=>{
         this.toastr.error("Error");

       }
     );

   }

   }
     become(){

       this.user.validationDeliverers=true;
         this.service.update(this.user).subscribe(
         data =>{
       },
         error=>{
           this.toastr.error("Error");
         }
       );


     }
    approve(email:string){

      this.service.getUserByEmail(email).subscribe(
        (data:Registration) =>{
         this.user=data;

         this.user.type="DOSTAVLJAC";
         this.user.idDeliverer=true;
         this.service.update2(this.user).subscribe(// mora se neko pretlatiti
         data =>{
         },
         error=>{
           this.toastr.error("Error");
        });


          },
        error =>{
         this.toastr.error("something was wrong!");
        }

       )
}




}
