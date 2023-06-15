import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './header/header.component';
import { EventPopComponent } from './event-pop/event-pop.component';
import { SliderMenuComponent } from './slider-menu/slider-menu.component';
import { FooterComponent } from './footer/footer.component';
import { FooterNavComponent } from './footer/footer-nav/footer-nav.component';

@NgModule({
  declarations: [
    HeaderComponent,
    EventPopComponent,
    SliderMenuComponent,
    FooterComponent,
    FooterNavComponent,
  ],
  imports: [CommonModule],
  exports: [
    HeaderComponent,
    EventPopComponent,
    SliderMenuComponent,
    FooterComponent,
  ],
})
export class SharedModule {}
