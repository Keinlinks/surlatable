import { Component, OnInit } from '@angular/core';
import { HeaderServiceService } from 'src/app/services/header-service.service';

@Component({
  selector: 'app-slider-menu',
  templateUrl: './slider-menu.component.html',
  styleUrls: ['./slider-menu.component.sass'],
})
export class SliderMenuComponent implements OnInit {
  constructor(private servicioHeader: HeaderServiceService) {}

  ngOnInit(): void {}
  hide() {
    this.servicioHeader.toggle_hide();
  }
}
