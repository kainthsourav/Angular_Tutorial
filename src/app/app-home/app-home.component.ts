import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-app-home',
  templateUrl: './app-home.component.html',
  styleUrls: ['./app-home.component.css']
})
export class AppHomeComponent implements OnInit {

  email:any;
  password:any;
  constructor() { }

  ngOnInit(): void {
  }
  onSubmit(data)
  {
   this.email=data.value.email;
   this.password=data.value.password;

  }

}
