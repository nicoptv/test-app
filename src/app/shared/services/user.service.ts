import { Injectable } from '@angular/core';
import { User } from '../models/user.model';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  _users : User[];

  constructor() { }

  init() : User[]{
    this._users = [
      new User('Ali', 'Delshad'),
      new User('Hamid', 'Sadeghi'),
      new User('Amir', 'Olfat'),
      new User('Keyvan', 'Nasr')
    ]
    return this._users;
  }

  edit(user : User, id : number): void {
    this._users[id] = new User(user.name, user.family,user.itemNum,user.birthday);
  }

  add(user : User): void {
    console.log(this._users);
    this._users.push(new User(user.name, user.family,this._users.length+1,user.birthday ));
  }

  delete(index: number) {
    this._users.splice(index, 1);
  }

  get users(): User[] {
    return this._users;
  }




}
