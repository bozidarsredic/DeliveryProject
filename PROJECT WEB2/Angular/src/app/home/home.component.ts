import { UserService } from './../shared/user.service';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UserDisplay } from './../shared/models/user-display.model';
import { ToastrService } from 'ngx-toastr';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Registration } from '../shared/models/registration.model';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styles: []
})
export class HomeComponent implements OnInit {


  users : Registration[] = [];
  user: Registration= new Registration();



  constructor(private router: Router, private toastr: ToastrService, private service: UserService) { }



  ngOnInit() {

   //this.email=localStorage.getItem('emaill');
   this.service.getUsers().subscribe(
    (data:Registration[]) =>{

       this.users = data;

      this.users.forEach(element => {
       // alert(element.email)

        if(element.email==localStorage.getItem('emaill')){
          this.user=element;


          UserName: new FormControl(this.user.username, Validators.required);



        }

      });

    },
    error =>{
     this.toastr.error("Nesto je poslo po zlu pa nisam mogao dobaviti korisnike!");
    }

   )

   this.router.navigateByUrl('/ud');
  }



  onLogout() {
    localStorage.removeItem('token');

    this.router.navigate(['user/login']);


  }


}
