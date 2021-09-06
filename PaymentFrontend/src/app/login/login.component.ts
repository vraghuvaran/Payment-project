import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { LoginserviceService } from '../services/loginservice.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
  providers: [LoginserviceService]
})
export class LoginComponent implements OnInit {

  loginForm: FormGroup
  constructor(private router: Router, private loginservice: LoginserviceService) {
    //  console.log(this.router.url)  
    this.loginForm = new FormGroup({
     username: new FormControl('',[
       Validators.required,
       Validators.minLength(6),
       Validators.maxLength(50),
       Validators.pattern(/^[ A-Za-z0-9_@]*$/)
     ]),
     password: new FormControl('',[
       Validators.required,
       Validators.minLength(6),
       Validators.maxLength(55)
     ])
    })
  }

  ngOnInit(): void {
  }

  handleLogin(){

    let data ={
      username: this.loginForm.controls['username'].value,
      password: this.loginForm.controls['password'].value
    }

    // console.log(data)
    this.loginservice.checkAuth(data)
    .subscribe((data)=>{
        
        console.log(data)
        this.router.navigate(['/transfer'])

    },(error)=>{



    })
    
  }

  get username(){
    return this.loginForm.controls['username']
  }

  get password() {
    return this.loginForm.controls['password']
  }

}
