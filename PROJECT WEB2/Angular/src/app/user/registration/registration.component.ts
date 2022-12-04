import { UserService } from './../../shared/user.service';
import { Component, OnInit } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { FormBuilder, FormControl, FormGroup, ValidatorFn, Validators } from '@angular/forms';
import { Registration } from 'src/app/shared/models/registration.model';
import { Router } from '@angular/router';

@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styles: []
})
export class RegistrationComponent implements OnInit {




  registrationForm = new FormGroup({
    UserName: new FormControl('a', Validators.required),
    Email: new FormControl('a@a',  [Validators.required , Validators.email]),
    LastName: new FormControl('a',  Validators.required ),
    Password: new FormControl('aaaaa', [Validators.required, Validators.minLength(5)]),
    NameAndLastName: new FormControl('a', Validators.required),
    DateOfBirth: new FormControl('2002-06-09', Validators.required),
    Addres: new FormControl('a', Validators.required),
    Type: new FormControl('a', Validators.required),
    Password2: new FormControl('aaaaa',  [Validators.required, Validators.minLength(5)]),
    Image: new FormControl()
  });



  constructor(public service: UserService,private router: Router, private fb:FormBuilder, private toastr: ToastrService) { }

  ngOnInit() {
  }

  onSubmit() {


    let regModel = new Registration();
    regModel.username = this.registrationForm.controls['UserName'].value
     regModel.email = this.registrationForm.controls['Email'].value
    regModel.password = this.registrationForm.controls['Password'].value
    regModel.nameAndLastName = this.registrationForm.controls['NameAndLastName'].value
    regModel.dateOfBirth = this.registrationForm.controls['DateOfBirth'].value
    regModel.address = this.registrationForm.controls['Addres'].value
    regModel.type = "POTROSAC"
    regModel.password2 = this.registrationForm.controls['Password2'].value
    regModel.validationDeliverers=false;
    regModel.idDeliverer=false
    regModel.image=this.registrationForm.controls['Image'].value.substring(12,this.registrationForm.controls['Image'].value.length)


        if(regModel.password!=regModel.password2){
          alert("Password is not the same")
        }
        else{
          this.service.register(regModel).subscribe(//
          data =>{
               if(data==null){
                alert("User with this email already exists");
                }
              else
                this.router.navigateByUrl("/user/login");
          },
          error=>{
            this.toastr.error("Error");

          }
        );
      }


  }

}
