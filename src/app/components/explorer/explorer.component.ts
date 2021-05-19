import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ApiService } from '../../service/api.service';

@Component({
  selector: 'app-explorer',
  templateUrl: './explorer.component.html',
  styleUrls: ['./explorer.component.scss']
})
export class ExplorerComponent implements OnInit {
  users: any = [];
  constructor(private _api:ApiService, private _router:Router) { }

  ngOnInit(): void {
    this._api.searchUsers().subscribe(
        response =>{
          this.users = response;
        }
    );
  }

  goUser(user){
    this._router.navigate(['users', user.id]);
  }

}
