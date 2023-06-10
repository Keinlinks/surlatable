import { Component, HostListener } from '@angular/core';
import { HeaderServiceService } from './services/header-service.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.sass'],
})
export class AppComponent {
  private subscribe_1!: Subscription;
  private subscribe_2!: Subscription;
  constructor(private servicioHeader: HeaderServiceService) {
    this.subscribe_1 = this.servicioHeader.togglehide$.subscribe(() => {
      this.hideSlider();
    });
    this.subscribe_2 = this.servicioHeader.toggleShow$.subscribe(() => {
      this.showSlider();
    });
  }
  toggle_menu: boolean = false;
  title = 'surlatable';

  showSlider() {
    this.toggle_menu = true;
  }
  hideSlider() {
    this.toggle_menu = false;
  }

  @HostListener('window:resize', ['$event'])
  onWindowResize(event: any) {
    if (window.innerWidth > 1024) {
      this.toggle_menu = false;
    }
  }
}
