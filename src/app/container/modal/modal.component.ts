import {Component} from '@angular/core';
import {NgbModal, ModalDismissReasons} from '@ng-bootstrap/ng-bootstrap';
import {ViewChild, ElementRef} from '@angular/core';
import { FormGroup, FormBuilder, Validators} from "@angular/forms";
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

  constructor(private modalService: NgbModal,private formBuilder: FormBuilder, private userService:UserService) {}

  buildForm(user= {name: '', family:'', birthday:'', numberOfChild:0}){
    this.formUser = this.formBuilder.group({
      name : [user.name,[Validators.required]],
      family : [user.family,[Validators.required]],
      birthday : [user.birthday,[Validators.required]],
      numberOfChild : [user.numberOfChild,[Validators.required]]
    })
  }


  open(data,index) {
    if(data) {
      this.index = index;
      this.buildForm(data);
    }else{
      this.buildForm();
    }



    this.modalService.open(this.content, {ariaLabelledBy: 'modal-basic-title'}).result.then((result : FormGroup) => {
      if (this.index)
      {
        this.user = new User(result.controls['name'].value,result.controls['family'].value,this.index,result.controls['birthday'].value,result.controls['numberOfChild'].value)
        this.userService.edit(this.user,this.index);
      }else
      {
        this.user = new User(result.controls['name'].value,result.controls['family'].value,null,result.controls['birthday'].value,result.controls['numberOfChild'].value);
        this.userService.add(this.user);
      }
      this.user = new User(result.get("name").value,result.get("family").value,);
      this.closeResult = `Closed with: ${result}`;
    }, (reason) => {
      this.closeResult = `Dismissed ${this.getDismissReason(reason)}`;
    });
  }

  private getDismissReason(reason: any): string {
    if (reason === ModalDismissReasons.ESC) {
      return 'by pressing ESC';
    } else if (reason === ModalDismissReasons.BACKDROP_CLICK) {
      return 'by clicking on a backdrop';
    } else {
      return  `with: ${reason}`;
    }
  }


}