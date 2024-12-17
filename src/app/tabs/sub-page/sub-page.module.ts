import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { SubPagePageRoutingModule } from './sub-page-routing.module';

import { SubPagePage } from './sub-page.page';
import { ComponentsModule } from 'src/app/components/components.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    SubPagePageRoutingModule,
    ComponentsModule
  ],
  declarations: [SubPagePage]
})
export class SubPagePageModule {}
