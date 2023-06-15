import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-picture',
  template: `
    <div class="banner">
      <picture>
        <source
          class="mobile_picture"
          srcset="{{mobile}}"
          media="(max-width: 1024px)" />
        <img class="desktop_picture" src="{{ desktop }}"
      /></picture>
    </div>
  `,
  styleUrls: ['./picture.component.sass'],
})
export class PictureComponent implements OnInit {
  constructor() {}
  @Input() desktop: string = '';
  @Input() mobile: string = '';
  ngOnInit(): void {}
}
