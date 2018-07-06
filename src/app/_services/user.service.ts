import { Injectable } from '@angular/core';
import { HttpClient,  HttpClientModule  } from '@angular/common/http';
import { Http,	HttpModule ,  Response } from '@angular/http';

import { User } from '../_models/user';

@Injectable()
export class UserService {
	
	constructor(private http: HttpClient){}
	
	create(user: User) {
		return this.http.post('http://localhost:3000/employees', user);
	}
	
	getAll() {
        return this.http.get<User[]>('http://localhost:3000/employees');
    }
	
	delete(id: number) {
        return this.http.delete('http://localhost:3000/employees/' + id);
    }
	
	getUser(id: number) {
		
        return this.http.get<User>('http://localhost:3000/employees/' + id);
    }
}