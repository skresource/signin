import { Component, OnInit, OnDestroy, Input } from '@angular/core';
import { ActivatedRoute, Router  } from '@angular/router';
import {NgForm} from '@angular/forms';
import { UserService } from '../_services/user.service';
import { AuthService } from '../_services/auth.service';

@Component({
  selector: 'welcome',
  templateUrl: 'welcome.component.html',
  //styleUrls: ['./app.component.css']
})


export class WelcomeComponent {
	
	path: string;
	private sub: any;
	public showSignUp :boolean;
	public page;
	public infoMessage:string;
	model: any = {};
   
   constructor(
		private route: ActivatedRoute, 
		private router: Router,
		private userService: UserService,
		private authService: AuthService,
		) {
	   //this.route.params.subscribe( params => console.log(params) );	   
   }
   
   
	ngOnInit() {
		this.authService.logout();
		this.sub = this.route.params.subscribe(params => {
		   this.page =  params['path'];  	    
		}); 
		
		if(this.page=='signup'){			 
			this.showSignUp = true;
		}
		else if(this.page=='login'){			
			this.showSignUp = false;
		}
		else{
			this.router.navigateByUrl('/notfound');
		}
	}

	ngOnDestroy() {
		this.sub.unsubscribe();
	}  

		
	  
	
	register(f: NgForm){
		
		this.userService.create(this.model)
            .subscribe(
                data => {
					console.log('successfully registered');
                    //this.alertService.success('Registration successful', true);
					this.infoMessage = 'successfully registered';					
                    this.router.navigate(['welcome/login']);
					this.showSignUp=false;
					//this.form.reset()
                },
                error => {
                    //this.alertService.error(error);
					console.log(error)
                    //this.loading = false;
                },
				() => {
					this.model.email ='';
					this.model.password ='';
					f.resetForm();
					//alert('done');
				})
	}
	
	login() {		
		
        //this.loading = true;	
        this.authService.login(this.model.email, this.model.password)
            .subscribe(
                data => {
					if(data.length > 0){
						this.router.navigate(['/dashboard/dashboard']);
					}
					else{
						this.infoMessage = 'Email/Password not correct';
					}
                },
                error => {
                    //this.alertService.error(error);
					console.log(error)
                    //this.loading = false;
                }
			);
    }
   
     
   
   
}
