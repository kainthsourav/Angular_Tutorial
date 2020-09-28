import { Component, OnInit } from '@angular/core';
import{FormGroup,FormControl,FormArray, FormBuilder, Validators} from '@angular/forms'

@Component({
  selector: 'app-app-home',
  templateUrl: './app-home.component.html',
  styleUrls: ['./app-home.component.css']
})
export class AppHomeComponent implements OnInit {

  email:any;
  password:any;
  Email:any;
  Password:any;

  UserLogin:FormGroup;

  constructor(private fb:FormBuilder) { }

  ngOnInit(): void {
    this.UserLogin=this.fb.group({
      Email:['',[Validators.required,Validators.email]],
      Pass:['',[Validators.required]]
    });
  }
  onSubmit(data)
  {
   this.email=data.value.email;
   this.password=data.value.password;

  }
  onSubmitRec()
  {

    if(this.UserLogin.invalid)
    {
      alert("Please enter email and password");
      return;
    }
  
    this.Email=this.UserLogin.controls["Email"].value;
    this.Password=this.UserLogin.controls["Pass"].value; 
  }

}
