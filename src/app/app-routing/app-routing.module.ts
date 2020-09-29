import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import{Routes,RouterModule} from '@angular/router';
import { AppHomeComponent } from '../app-home/app-home.component';
import { AppComponent } from '../app.component';


const route:Routes=[
  {path:'',component:AppComponent}
]
@NgModule({
  declarations: [],
  imports: [RouterModule.forRoot(route),
    CommonModule
  ],
  exports:[RouterModule]
})
export class AppRoutingModule { }
