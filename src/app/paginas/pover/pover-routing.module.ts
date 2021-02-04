import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { PoverPage } from './pover.page';

const routes: Routes = [
  {
    path: '',
    component: PoverPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PoverPageRoutingModule {}
