//https://github.com/cornflourblue/angular2-registration-login-example/blob/master/app/_services/user.service.ts
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';
import { Http,	HttpModule ,  Response } from '@angular/http';
import 'rxjs/add/operator/map';
import { FormsModule }    from '@angular/forms';
import { routing }  from './app.routing';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';

import { AppComponent } from './app.component';
import { WelcomeComponent } from './welcome/welcome.component';
import { DashBoardComponent } from './dashboard/dashboard.component';
import { RegisterComponent } from './welcome/register.component';
import { ProfileComponent } from './profile/profile.component';
import { PageNotFoundComponent } from './notfound.component';

import { UserService } from './_services/user.service';
import { AuthService } from './_services/auth.service';





@NgModule({
  declarations: [
    AppComponent,
	WelcomeComponent,
	RegisterComponent,
	DashBoardComponent,
	ProfileComponent,
	PageNotFoundComponent
  ],
  imports: [
    BrowserModule,
	BrowserAnimationsModule,
	HttpModule,
	HttpClientModule,
	FormsModule,
	routing
  ],
  providers: [UserService,AuthService],
  bootstrap: [AppComponent]
})
export class AppModule { }
