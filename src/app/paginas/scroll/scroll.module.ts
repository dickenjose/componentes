import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ScrollPageRoutingModule } from './scroll-routing.module';

import { ScrollPage } from './scroll.page';
import { ComponentesModule } from '../../componentes/componentes.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ScrollPageRoutingModule,
    ComponentesModule
  ],
  declarations: [ScrollPage]
})
export class ScrollPageModule {}
