import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { SubPagePageRoutingModule } from './sub-page-routing.module';

import { SubPagePage } from './sub-page.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    SubPagePageRoutingModule
  ],
  declarations: [SubPagePage]
})
export class SubPagePageModule {}
