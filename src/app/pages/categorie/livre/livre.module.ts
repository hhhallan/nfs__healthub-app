import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { LivrePageRoutingModule } from './livre-routing.module';

import { LivrePage } from './livre.page';
import {SharedModule} from "../../../modules/shared/shared.module";

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    LivrePageRoutingModule,
    SharedModule
  ],
  declarations: [LivrePage]
})
export class LivrePageModule {}
