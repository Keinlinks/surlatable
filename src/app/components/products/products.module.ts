import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProductsComponent } from './products/products.component';
import { CookwareComponent } from './cookware/cookware.component';
import { RouterModule } from '@angular/router';

@NgModule({
  declarations: [ProductsComponent, CookwareComponent],
  imports: [CommonModule, RouterModule.forRoot([])],
  exports: [ProductsComponent, CookwareComponent],
})
export class ProductsModule {}
