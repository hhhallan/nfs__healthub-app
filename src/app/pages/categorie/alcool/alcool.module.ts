import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { AlcoolPageRoutingModule } from './alcool-routing.module';

import { AlcoolPage } from './alcool.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    AlcoolPageRoutingModule
  ],
  declarations: [AlcoolPage]
})
export class AlcoolPageModule {}
