import { Component, OnInit, OnDestroy, Input } from '@angular/core';
import { ActivatedRoute, Router  } from '@angular/router';

import { User } from '../_models/user';
import { UserService } from '../_services/user.service';

@Component({
	templateUrl: './profile.component.html'
})

export class ProfileComponent implements OnInit{
	
	currentUser: User;
	infoMessage: string;
	user: <any>; 	
	 
	constructor(
		private userService: UserService,
		private route: ActivatedRoute,
		private router: Router
	){
		
		if(localStorage.getItem('currentUser')==null){
			this.infoMessage = 'Please login first';
			this.router.navigate(['welcome/login']);
			//this.router.navigate(['welcome'], { queryParams: { returnUrl: 'login' }});
		}
		else
			this.currentUser = JSON.parse(localStorage.getItem('currentUser'));
	} 
	
	
	ngOnInit(){
		this.route.params.subscribe(params => {		 
		   this.loadUsers(params['id']);
		   console.log(this.user);
		}); 
		 
	}
	
	private loadUsers(id: number){
		
		this.userService.getUser(id).subscribe( 
			user => { 		 
				this.user = user; 
			}
		);		
	}
	
}