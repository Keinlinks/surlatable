import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-event-pop',
  template: `
    <section>
      <p>{{ eventText }}</p>
      <a>{{ linkText }}</a>
    </section>
  `,
  styleUrls: ['./event-pop.component.sass'],
})
export class EventPopComponent implements OnInit {
  eventText: string = 'Ends Today: Summer Cookware & Bakeware up to 50% off.';
  linkText: string = 'Shop Now';
  constructor() {}

  ngOnInit(): void {}
}
