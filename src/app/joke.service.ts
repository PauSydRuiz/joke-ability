import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { throwError } from 'rxjs';
import { catchError, map, tap } from 'rxjs/operators';
import { baseUrl } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})

export class JokeService {
  // url="http://localhost:3000/signupUsersList"
  jokeUrl="http://127.0.0.1:8000/jokes/jokes/"
  api="http://127.0.0.1:8000/core/token/login"
  user = "http://127.0.0.1:8000/users/users/"

  constructor(private http:HttpClient) { }
  
  saveUser(data: any)
  {
    console.log("service ",data)
    return this.http.post(this.user,data)
    
  }

  //get data
  // getPost(){
  //   return this.http.get('http://localhost:3000/joke-list')
  //   // 
  // }

  // getUser(){
  //   return this.http.get(this.url)
  // }
  getUser(data: any):Observable<any>{
    console.log('Connected')
    return this.http.post(`${baseUrl}token/login`,data).pipe(
      catchError(this.handleError)
    );
  }
  private handleError(error: HttpErrorResponse) {
    if (error.status === 0) {
      // A client-side or network error occurred. Handle it accordingly.
      console.error('An error occurred:', error.error);
    } else {
      // The backend returned an unsuccessful response code.
      // The response body may contain clues as to what went wrong.
      console.error(
        `Backend returned code ${error.status}, body was: `, error.error);
    }
    // Return an observable with a user-facing error message.
    return throwError(() => ('Invalid Username or Password.'));
    // return throwError(() => new Error('Invalid Username or Password.'));
  }

  getJokes(){
    return this.http.get(this.jokeUrl)
  }

  saveJoke(data: any){
    console.log("service ",data)
    return this.http.post(this.jokeUrl,data)
  }


  getProfile(){
    return this.http.get(this.user);
  }

  // getAuthor(id: number): Observable<Author> {
  //   const url = `${this.jokeUrl}/${id}`;
  //   return this.http.get<Author>(url).pipe(
  //     tap(_ => this(`fetched author id=${id}`)),
  //     catchError(this.handleError<Author>(`getAuthor id=${id}`))
  //   );
  // }
}

