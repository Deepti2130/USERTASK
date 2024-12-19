import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { Iuser } from 'src/app/shared/model/user';
import { UsersService } from 'src/app/shared/service/users.service';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.scss']
})
export class UserComponent implements OnInit {
userid! :string;

userInfo! : Iuser

  constructor(
    private _routes:ActivatedRoute,
    private _userservice:UsersService
  ) { }

  ngOnInit(): void {
//we used directly params on activated routes and behaves as observable
    this._routes.params
    .subscribe((params:Params)=>{
      this.userid = params['userid']

      this.userInfo = this._userservice.fetchuserdata(this.userid)
    })

  //   this.userid = this._routes.snapshot.params['userid']

  //  this.userInfo = this._userservice.fetchuserdata(this.userid)
  }


  onRemoveuser(){
    this._userservice.Removeuser(this.userid)
  }

}
