import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router  } from '@angular/router';

import { User } from '../_models/user';
import { UserService } from '../_services/user.service';

@Component({
	templateUrl: 'dashboard.component.html'
})


export class DashBoardComponent implements OnInit{
	currentUser: User;
	users: User[] = [];
	infoMessage = '';
	
	
	constructor(
		private userService: UserService,
		private router: Router
	){
		if(localStorage.getItem('currentUser')==null){
			this.infoMessage = 'Please login first';
			this.router.navigate(['welcome/login']);
			//this.router.navigate(['welcome'], { queryParams: { returnUrl: 'login' }});
		}
		else
			this.currentUser = JSON.parse(localStorage.getItem('currentUser'));
		
		//console.log(this.currentUser[0].first_name)
	}
	
	
	ngOnInit(){
		this.loadAllUsers()
	}
	
	deleteUser(id: number) {
        this.userService.delete(id).subscribe(() => { this.loadAllUsers() });
    }

	
	private loadAllUsers(){
		this.userService.getAll().subscribe( users => { this.users = users; });
	}
}