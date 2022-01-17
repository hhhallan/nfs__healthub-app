import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {HeaderComponent} from "../../components/header/header.component";

const directives: Array<any> = [
  HeaderComponent
];

@NgModule({
  declarations: directives,
  imports: [
    CommonModule
  ],
  exports: directives
})
export class SharedModule { }
