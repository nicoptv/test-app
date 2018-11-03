import { Injectable } from '@angular/core';
import { User } from '../models/user.model';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  _users : User[];

  constructor() { }

  //init our array of User
  init() : User[]{
    this._users = [
      new User('Ali', 'Delshad'),
      new User('Hamid', 'Sadeghi'),
      new User('Amir', 'Olfat'),
      new User('Keyvan', 'Nasr')
    ]
    return this._users;
  }
  //edit the user with his ID
  edit(user : User, id : number): void {
    console.log(this._users);
    console.log(id);
    this._users[id] = new User(user.name, user.family,id,user.birthday,user.numberOfChild);
  }

  //add a new user on _users
  add(user : User): void {
    console.log('add');
    this._users.push(new User(user.name, user.family,this._users.length+1,user.birthday,user.numberOfChild ));
  }

  //delete a user with his ID
  delete(index: number) {
    this._users.splice(index, 1);
  }

  //get all user
  get users(): User[] {
    return this._users;
  }




}
