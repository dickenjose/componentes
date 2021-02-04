import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { PoverPageRoutingModule } from './pover-routing.module';

import { PoverPage } from './pover.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    PoverPageRoutingModule
  ],
  declarations: [PoverPage]
})
export class PoverPageModule {}
