import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { SkyStatusPage } from './sky-status.page';

const routes: Routes = [
  {
    path: '',
    component: SkyStatusPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class SkyStatusPageRoutingModule {}
