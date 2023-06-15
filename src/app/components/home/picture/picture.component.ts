import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-picture',
  template: `
    <div class="banner">
      <picture>
        <source
          class="mobile_picture"
          srcset="
            https://www.surlatable.com/on/demandware.static/-/Sites/default/dwfaab2508/images/homepage_2023/768_mobile_banners/230612_WarehouseSale_HP_Hero_HP_Hero_Mobile_768x850_ET.jpg
          "
          media="(max-width: 1024px)" />
        <img
          class="desktop_picture"
          src="https://www.surlatable.com/on/demandware.static/-/Sites/default/dwbfe15f38/images/homepage_2023/1680x690_hero/230612_WarehouseSale_HP_Hero_HP_Hero_Desktop_1680x690_ET.jpg"
      /></picture>
    </div>
  `,
  styleUrls: ['./picture.component.sass'],
})
export class PictureComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {}
}
