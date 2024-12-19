import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { Iuser } from 'src/app/shared/model/user';
import { UsersService } from 'src/app/shared/service/users.service';
import { UuidService } from 'src/app/shared/service/uuid.service';

@Component({
  selector: 'app-userform',
  templateUrl: './userform.component.html',
  styleUrls: ['./userform.component.scss']
})
export class UserformComponent implements OnInit {
userid! : string;

userInfo! : Iuser

userForm !: FormGroup

//for edit and update functionality
IsinEditmode:boolean = false

  constructor(
    private _routes:ActivatedRoute,
    private _userservice:UsersService,
    private _uuidservice:UuidService
  ) { }

  ngOnInit(): void {
    //create form control for username and userrole
   this.userForm = new FormGroup ({
    username:new FormControl(null, [Validators.required]),
    userrole:new FormControl(null, [Validators.required]),
   })

   this.userid = this._routes.snapshot.params['userid']

   if(this.userid){
    this.IsinEditmode = true
    this.userInfo = this._userservice.fetchuserdata(this.userid)
    this.userForm.patchValue(this.userInfo)
   }


  }


  onAdduser(){
    if(this.userForm.valid){

      let userobj:Iuser = {
        ...this.userForm.value,
       userid:this._uuidservice.generateUuid()
      }

      this.userForm.reset()
      console.log(userobj)

      this._userservice.Addnewuser(userobj)
    }
  }

  onupdateuser(){
    let updatedobj:Iuser = {...this.userForm.value, userid:this.userid}
    console.log(updatedobj)

    this.userForm.reset()

    this._userservice.updateuser(updatedobj)
  }

}
