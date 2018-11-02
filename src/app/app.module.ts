import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule  } from '@angular/forms';

import { AppComponent } from './app.component';
import { HelloComponent } from './hello.component';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import { ContainerComponent } from './container/container.component';
import { HeaderComponent } from './header/header.component';


import { NgbdModalBasic } from './container/modal/modal.component';


@NgModule({
  imports:      [ BrowserModule, 
                  FormsModule,
                  NgbModule, 
                  ReactiveFormsModule ],
  declarations: [ AppComponent, 
                  HelloComponent, 
                  ContainerComponent, 
                  HeaderComponent,
                  NgbdModalBasic ],
  entryComponents: [NgbdModalBasic],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }
