 import { ActivatedRouteSnapshot, Resolve } from '@angular/router';
 import { Injectable } from '@angular/core';
 import { Observable, of } from 'rxjs';
 import { catchError } from 'rxjs/operators';
 import { ApiService } from '../service/api.service';

 @Injectable({
     providedIn:'root'
 })

export class UserResolver implements Resolve<Observable<any>>{

    constructor(private _api:ApiService){}

    resolve(route:ActivatedRouteSnapshot){
        
        return this._api.getUser(route.paramMap.get('id')).pipe(
            catchError(err =>{
                alert("ha habido un error!");
                //devolvemos un observable vacio para que no vaya a la ruta
                return of ();
            })
        );
    }

 }