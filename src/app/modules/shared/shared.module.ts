import { NotificationComponent } from './../../components/notification/notification.component';
import { IonicModule } from '@ionic/angular';
import { LoaderComponent } from './../../components/loader/loader.component';
import { ErrorComponent } from './../../components/error/error.component';
import { HomeheaderComponent } from './../../components/homeheader/homeheader.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {HeaderComponent} from "../../components/header/header.component";

const directives: Array<any> = [
  HeaderComponent,
  HomeheaderComponent,
  ErrorComponent,
  LoaderComponent,
  NotificationComponent
];

@NgModule({
  declarations: directives,
  imports: [
    CommonModule,
    IonicModule
  ],
  exports: directives
})
export class SharedModule { }
