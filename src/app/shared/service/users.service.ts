import { Injectable } from '@angular/core';
import { Iuser } from '../model/user';
import { Router } from '@angular/router';
import { SnackbarService } from './snackbar.service';

@Injectable({
  providedIn: 'root'
})
export class UsersService {

  userArr:Array<Iuser>= [
    {
      username:"Deepti Jadhav",
      userid:"1",
      userrole:"candidate"
    },
    {
      username:"Sneha Tipradhi",
      userid:"2",
      userrole:"candidate"
    },
    {
      username:"Shubhi Bharate",
      userid:"3",
      userrole:"Admin"
    }
   ]
  constructor(
    private _router:Router,
    private _snackBar:SnackbarService
  ) { }


  fetchAlluser(){
    //API call to all users data
    return this.userArr
  }


  fetchuserdata(id:string):Iuser{
    //API call to get single user
  return this.userArr.find(user => user.userid === id)!
  }

  Addnewuser(user:Iuser){
    //API call to add new user
    this.userArr.push(user)
    this._router.navigate(['/users'])

    this._snackBar.opensnackBar(`The user ${user.username} is added successfully!!!`)
  }


  updateuser(udateduser:Iuser){

    let getIndex = this.userArr.findIndex(user=>user.userid === udateduser.userid)

    this.userArr[getIndex] = udateduser

    this._router.navigate(['/users'])

    this._snackBar.opensnackBar(`The user ${udateduser.username} is updated successfully!!!`)
  }


  Removeuser(id:string){
  //API call to remove user

  let getIndex = this.userArr.findIndex(user=>user.userid === id)

  this.userArr.splice(getIndex,1)

  this._router.navigate(['/users'])

  this._snackBar.opensnackBar(`The user is removed successfully!!!`)


  }
}
