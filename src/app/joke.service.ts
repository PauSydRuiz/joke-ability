import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})

export class JokeService {
  url="http://localhost:3000/signupUsersList"

  constructor(private http:HttpClient) { }
  
  saveUser(data: any)
  {
    console.log("service ",data)
    return this.http.post(this.url,data)
    
  }

  //get data
  getPost(){
    return this.http.get('https://jsonplaceholder.typicode.com/posts')

  }
}

