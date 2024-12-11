import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { SubPagePage } from './sub-page.page';

const routes: Routes = [
  {
    path: '',
    component: SubPagePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class SubPagePageRoutingModule {}
