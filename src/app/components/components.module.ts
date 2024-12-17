import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProductDumbComponent } from './product-dumb/product-dumb.component';
import { IonicModule } from '@ionic/angular';
import { ProductSmartComponent } from './product-smart/product-smart.component';

const components = [ProductDumbComponent, ProductSmartComponent];

@NgModule({
  declarations: components,
  imports: [
    CommonModule,
    IonicModule
  ],
  exports: components,
})
export class ComponentsModule { }
