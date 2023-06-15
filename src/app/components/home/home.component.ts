import { Component, HostListener, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { HeaderServiceService } from 'src/app/services/header-service.service';
import { PopInfoService } from 'src/app/services/pop-info.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.sass'],
})
export class HomeComponent implements OnInit {
  private subscribe_1!: Subscription;
  private subscribe_2!: Subscription;
  pop_info: string[] = [];
  pop_info_2: string[] = [];
  constructor(
    private servicioHeader: HeaderServiceService,
    private pop: PopInfoService
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
  ngOnInit(): void {}
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
