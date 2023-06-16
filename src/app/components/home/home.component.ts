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
  //pictures
  desktop_banner: string =
    'https://www.surlatable.com/on/demandware.static/-/Sites/default/dwd3bc2706/images/homepage_2023/2350_skinny_banner/230615_Extra_20off_Clearance_WEHPSBED_2350x200.jpg';
  mobile_banner: string =
    'https://www.surlatable.com/on/demandware.static/-/Sites/default/dwb76a6366/images/homepage_2023/768_mobile_banners/230615_Extra_20off_Clearance_WEHPSBM_768x360.jpg';
  desktop_picture: string =
    'https://www.surlatable.com/on/demandware.static/-/Sites/default/dw1368e024/images/homepage_2023/1680x600_banner/230601_Scanpan-Upto55off_HP_WideBanner_Desk_1680x600.jpg';
  mobile_picture: string =
    'https://www.surlatable.com/on/demandware.static/-/Sites/default/dwdc53eab4/images/homepage_2023/768_mobile_banners/230601_Scanpan-Upto55off_HP_Mobile_768x950.jpg';

  constructor() {}
  ngOnInit(): void {}

  title = 'surlatable';
}
