import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { NavBarComponent } from './nav-bar/nav-bar.component';
import { AppHomeComponent } from './app-home/app-home.component';
import{AppRoutingModule} from './app-routing/app-routing.module';
import{FormsModule,ReactiveFormsModule} from  '@angular/forms'


@NgModule({
  declarations: [
    AppComponent,
    NavBarComponent,
    AppHomeComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
