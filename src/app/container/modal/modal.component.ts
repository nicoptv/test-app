import {Component,OnInit} from '@angular/core';
import {NgbModal, ModalDismissReasons} from '@ng-bootstrap/ng-bootstrap';
import { FormControl, FormGroup, FormBuilder, Validators, FormArray } from "@angular/forms";
import { User } from 'src/app/shared/models/user.model';

@Component({
  selector: 'ngbd-modal-basic',
  templateUrl: './modal.component.html',
  styleUrls:['../container.component.css','./modal.component.css']
})
export class NgbdModalBasic implements OnInit {
  closeResult: string;
  formUser : FormGroup;
  user : User;

  constructor(private modalService: NgbModal,private formBuilder: FormBuilder) {}

  ngOnInit(){
    this.buildForm();
  }


  

  buildForm(user= {name: '', family:'', birthday:'', numberOfChild:0}){
    this.formUser = this.formBuilder.group({
      name : [user.name,[Validators.required]],
      family : [user.family,[Validators.required]],
      birthday : [user.birthday,[Validators.required]],
      numberOfChild : [user.numberOfChild,[Validators.required]]
    })
  }


  open(content) {
    this.modalService.open(content, {ariaLabelledBy: 'modal-basic-title'}).result.then((result) => {
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