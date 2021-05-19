import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { delay } from "rxjs/operators";

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor(private _http:HttpClient) { }

  searchUsers(){
    return   this._http.get('https://jsonplaceholder.typicode.com/users');
  }

  getUser(id){
    return   this._http.get('https://jsonplaceholder.typicode.com/users/'+id).pipe(
      delay(3000)
    );
  }
}
