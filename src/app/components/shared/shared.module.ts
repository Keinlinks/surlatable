import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './header/header.component';
import { EventPopComponent } from './event-pop/event-pop.component';
import { SliderMenuComponent } from './slider-menu/slider-menu.component';

@NgModule({
  declarations: [HeaderComponent, EventPopComponent, SliderMenuComponent],
  imports: [CommonModule],
  exports: [HeaderComponent, EventPopComponent, SliderMenuComponent],
})
export class SharedModule {}
