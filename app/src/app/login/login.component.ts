import { Component, OnInit } from '@angular/core';
import {Http, Headers} from '@angular/http';
import {FormGroup, FormControl, FormBuilder} from '@angular/forms'

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  formSignUp : FormGroup;
  constructor(private http : Http, private fb : FormBuilder) { 
    this.formSignUp = this.fb.group({
      username : "abc@gmail.com",
      password : "",
      subject: this.fb.group({
        A1 : true,
        B1 : false,
        C1 : true
      })
    });
  }

  ngOnInit(): void {
  }

  onSubmit(formSignIn){
    const url = 'http://localhost:3000/signin';
    const header = new Headers({'Content-Type':'application/json'});
    const body = JSON.stringify(formSignIn.value);
    this.http.post(url, body, {headers:header})
              .toPromise()
              .then(res=>res.json())
              .then(resJson=>console.log(resJson))
  }

  submit(){
    console.log(this.formSignUp.value);
  }

} 
