import { Component, OnInit } from '@angular/core';
import { Iuser } from '../../model/user';
import { Router } from '@angular/router';
import { UsersService } from '../../service/users.service';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.scss']
})
export class UsersComponent implements OnInit {
userInfo! : Array<Iuser> //for store the all data
  constructor(
    private _router:Router,
    private _userservice:UsersService
  ) { }

  ngOnInit(): void {
//which is to get all user data and api call in service
    this.userInfo = this._userservice.fetchAlluser()
  }

}
