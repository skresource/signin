//https://www.concretepage.com/angular-2/angular-2-routing-and-navigation-example
import { Routes, RouterModule } from '@angular/router';

import { WelcomeComponent } from './welcome/welcome.component';
import { DashBoardComponent } from './dashboard/dashboard.component';
import { ProfileComponent } from './profile/profile.component';

import { PageNotFoundComponent } from './notfound.component';
 

const appRoutes: Routes = [
    
    
	{ path: '', redirectTo: 'welcome/login', pathMatch: 'full'}, //default 	
	{ path: 'welcome', redirectTo: 'welcome/login', pathMatch: 'full'},
	{ path: 'welcome/:path', component: WelcomeComponent }, //path=register or login 	
	{ path: 'dashboard/dashboard', component: DashBoardComponent }, //path=register or login 
	{ path: 'profile/edit/:id', component: ProfileComponent },  
	{ path: '**', component: PageNotFoundComponent } 
];

export const routing = RouterModule.forRoot(appRoutes);