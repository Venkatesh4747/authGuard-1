import { Component, OnInit ,} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import { Router } from '@angular/router';
import {ServiceService}from '../../service/service.service'

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  registerForm: FormGroup|any;

  constructor(private fb:FormBuilder,private api:ServiceService,private route:Router) { }

  ngOnInit(): void {
    if(this.api.isLoggedIn()){
      this.route.navigate(['admin'])
    }
    this.registerForm=this.fb.group({
      email:['',Validators.required],
      password:['',Validators.required]
    })
  }
  onSubmit(){
console.log(this.registerForm.value);
if(this.registerForm.valid){
  this.api.login(this.registerForm.value).subscribe(
    (result)=>{
      this.route.navigate(['admin'])
    },
    (err:Error)=>{
      alert(err.message);
    }
  )
}

  }


}
