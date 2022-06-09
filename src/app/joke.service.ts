import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})

export class JokeService {
  url="http://localhost:3000/signupUsersList"
  jokeUrl="http://localhost:3000/joke-list"

  constructor(private http:HttpClient) { }
  
  saveUser(data: any)
  {
    console.log("service ",data)
    return this.http.post(this.url,data)
    
  }

  //get data
  getPost(){
    return this.http.get('http://localhost:3000/joke-list')
    // 
  }

  getUser(){
    return this.http.get(this.url)
  }


  getJokes(){
    return this.http.get('http://localhost:3000/joke-list')
  }

  saveJoke(data: any){
    console.log("service ",data)
    return this.http.post(this.jokeUrl,data)
  }

  
}

