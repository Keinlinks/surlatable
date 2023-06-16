import { Component, HostListener } from '@angular/core';
import { HeaderServiceService } from './services/header-service.service';
import { Subscription } from 'rxjs';
import { PopInfoService } from './services/pop-info.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.sass'],
})
export class AppComponent {
  pop_info: string[] = [];
  pop_info_2: string[] = [];
  toggle_menu: boolean = false;
  private subscribe_1!: Subscription;
  private subscribe_2!: Subscription;
  constructor(
    private pop: PopInfoService,
    private servicioHeader: HeaderServiceService
  ) {
    this.subscribe_1 = this.servicioHeader.togglehide$.subscribe(() => {
      this.hideSlider();
    });
    this.subscribe_2 = this.servicioHeader.toggleShow$.subscribe(() => {
      this.showSlider();
    });
    this.pop_info = pop.getPop();
    this.pop_info_2 = pop.getPop_2();
  }
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
