import {Component} from '@angular/core';
import {NgbModal, ModalDismissReasons} from '@ng-bootstrap/ng-bootstrap';
import {ViewChild, ElementRef} from '@angular/core';
import { FormControl, FormGroup, Validators} from "@angular/forms";
import { User } from 'src/app/shared/models/user.model';
import { UserService } from 'src/app/shared/services/user.service';


@Component({
  selector: 'ngbd-modal-basic',
  templateUrl: './modal.component.html',
  styleUrls:['../container.component.css','./modal.component.css']
})
export class NgbdModalBasic {
  closeResult: string;
  formUser : FormGroup;
  user : User;
  edit:boolean;
  index : number;

  @ViewChild('content') content: ElementRef;

  constructor(private modalService: NgbModal,
              private userService:UserService) {}

  //Build for our form with validators
  buildForm(user = {name: '', family:'', birthday:'' ,numberOfChild:0}){
    this.formUser = new FormGroup({
      'name' : new FormControl(user.name,[Validators.required,Validators.pattern('[a-zA-Z]*')]),
      'family' : new FormControl(user.family,[Validators.required,Validators.pattern('[a-zA-Z]*')]),
      'birthday' : new FormControl(user.birthday,[Validators.required]),
      'numberOfChild' : new FormControl(user.numberOfChild,[Validators.required,Validators.pattern('[0-9]*')])
    })
  }

  get name() { return this.formUser.get('name'); }

  get family() { return this.formUser.get('family'); }

  get birthday() { return this.formUser.get('birthday'); }

  get numberOfChild() { return this.formUser.get('numberOfChild'); }

  //Function for open modal
  //  if data, we post the data on Modal
  //  if index not null, we added a new User else we edit the user, we need userService to change our users
  //  if modal quit, nothing
  //.........................
  open(data?,index?) {
    if(data) {
      this.index = index;
      this.buildForm(data);
    }else{
      this.buildForm();
    }
    this.modalService.open(this.content, {ariaLabelledBy: 'modal-basic-title'}).result.then((result : FormGroup) => {
      if (this.index != null)
      {
        this.user = new User(result.controls['name'].value,result.controls['family'].value,this.index,result.controls['birthday'].value,result.controls['numberOfChild'].value)
        this.userService.edit(this.user,this.index);
      }else
      {
        this.user = new User(result.controls['name'].value,result.controls['family'].value,0,result.controls['birthday'].value,result.controls['numberOfChild'].value);
        this.userService.add(this.user);
      }
      this.user = new User(result.get("name").value,result.get("family").value,);
    }, (reason) => {
    });
  }
}