import { Component, OnInit, Injectable } from '@angular/core';
import { User } from '../shared/models/user.model';
import { LocalDate } from '../shared/models/localdate.model';
import { NgbDateStruct } from '@ng-bootstrap/ng-bootstrap';
import { FilterPipe } from '../shared/filters/filter.pipe';

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
  
  constructor() { }

  ngOnInit(){
    this._users = [
      new User('Ali', 'Delshad'),
      new User('Hamid', 'Sadeghi'),
      new User('Amir', 'Olfat'),
      new User('Keyvan', 'Nasr')
    ]
  }

  get users(): User[] {
    return this._users;
  }

  delete(index: number) {
    this._users.splice(index, 1);
  }

  setEditUser(index: number): void {
    this.editingIndex = index;
    this.name = this._users[index].name;
    this.family = this._users[index].family;
    this.local_date = this.date_pick;
  }

  edit(): void {
    this.setDate();
    this._users[this.editingIndex] = new User(this.name, this.family,this.editingIndex,this.local_date);
    this.editingIndex = undefined;
    this.name = "";
    this.family = "";
    this.local_date = undefined;
  }

  add(): void {
    this.setDate();
    this._users.push(new User(this.name, this.family,this._users.length+1,this.local_date ));
    this.name = "";
    this.family = "";
    this.local_date= undefined;
  }

  setDate(): void {
    this.local_date = this.date_pick;
  }

}
