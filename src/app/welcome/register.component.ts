import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { UserService } from '../_services/user.service';

@Component({
    moduleId: module.id,
    templateUrl: './welcome.component.html'
})

export class RegisterComponent  {
	public showSignUp :boolean = true;
	
	constructor(
		private router: Router,
		private userService: UserService,		
	){}
}
