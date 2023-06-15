import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-event-pop',
  template: `
    <section>
      <p>{{ info[0] }}</p>
      <a>{{ info[1] }}</a>
    </section>
  `,
  styleUrls: ['./event-pop.component.sass'],
})
export class EventPopComponent implements OnInit {
  eventText: string = 'Ends Today: Summer Cookware & Bakeware up to 50% off.';
  linkText: string = 'Shop Now';
  @Input() info!: string[];
  constructor() {}

  ngOnInit(): void {}
}
