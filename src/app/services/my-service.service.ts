import { User } from './../model/user';
import { HttpClientModule,HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type': 'application/json',
  }),
};

@Injectable({
  providedIn: 'root'
})
export class MyServiceService {
  private userUrl = "http://localhost:3000/users";

  constructor(private http : HttpClient) { 
    console.log(this.getUser());
  }
  getUser (): Observable<User[]> {
      return this.http.get<User[]>(this.userUrl);
  }

  addUser(user: User): Observable<User> {
    console.log("this fonction triggerd " + user.name); 
    return this.http.post<User>(this.userUrl,user);
  }
  deleteUser (user : User):Observable<User> {
    return this.http.delete<User> (this.userUrl + "/" + user.id );
  }
  
}
