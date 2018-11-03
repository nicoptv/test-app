import { Pipe, PipeTransform } from '@angular/core';
import { User } from '../models/user.model';

@Pipe({name: 'filter'})
export class FilterPipe implements PipeTransform {

  //Test users with search
  //Test all of value on lowercase
  transform(users : User[], search: string): User[] | null {
    if (!search.length) {
      return users;
    }else{
      return users.filter( c => c.name.toLowerCase().includes(search.toLowerCase()))
    }
  }

}
