import { Component, OnInit, Injectable } from '@angular/core';
import { User } from '../shared/models/user.model';
import { NgbDateStruct } from '@ng-bootstrap/ng-bootstrap';
import { UserService } from '../shared/services/user.service';

@Injectable({
  providedIn: 'root'
})

@Component({
  selector: 'app-container',
  templateUrl: './container.component.html',
  styleUrls: ['./container.component.css']
})
export class ContainerComponent implements OnInit {

  users: User[];

  name: string;
  family: string;
  editingIndex: number;
  date_pick: NgbDateStruct;
  search: string = '';
  content : any;
  
  constructor(private userService: UserService) { }

  ngOnInit(){
    this.users = this.userService.init();
  }

  //edit user in userService
  editUser(user : User, index: number): void {
    this.userService.edit(user,index);
  }

  //add user in userService
  addUser(user : User): void {
    this.userService.add(user);
  }

  //delete user in userService
  deleteUser(index: number) {
    this.userService.delete(index);
  }
}
