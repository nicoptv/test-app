import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule  } from '@angular/forms';

import { AppComponent } from './app.component';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import { ContainerComponent } from './container/container.component';
import { HeaderComponent } from './header/header.component';
import { FilterPipe } from './shared/filters/filter.pipe';

import { NgbdModalBasic } from './container/modal/modal.component';
import { UserService } from './shared/services/user.service';


@NgModule({
  imports:      [ BrowserModule, 
                  FormsModule,
                  NgbModule, 
                  ReactiveFormsModule ],
  declarations: [ AppComponent, 
                  ContainerComponent, 
                  HeaderComponent,
                  NgbdModalBasic,
                  FilterPipe ],
  providers:    [UserService],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }
