import { Component, OnInit, Injectable } from '@angular/core';
import { User } from '../shared/models/user.model';
import { LocalDate } from '../shared/models/localdate.model';
import { NgbDateStruct } from '@ng-bootstrap/ng-bootstrap';
import { FilterPipe } from '../shared/filters/filter.pipe';
import { UserService } from '../shared/services/user.service';

@Injectable({
  providedIn: 'root'
})

@Component({
  selector: 'app-container',
  templateUrl: './container.component.html',
  styleUrls: ['./container.component.css'],
  providers: [FilterPipe]
})
export class ContainerComponent implements OnInit {

  private _users: User[];

  name: string;
  family: string;
  editingIndex: number;
  local_date : LocalDate;
  date_pick: NgbDateStruct;
  search: string = '';
  content : any;
  
  constructor(private userService: UserService) { }

  ngOnInit(){
    this._users = this.userService.init();
  }

  editUser(user : User, index: number): void {
    this.userService.edit(user,index);
  }

  addUser(user : User): void {
    this.userService.add(user);
  }

  delete(index: number) {
    this.userService.delete(index);
  }

  setDate(): void {
    this.local_date = this.date_pick;
  }

}
