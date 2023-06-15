import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class PopInfoService {
  info_pop: string = 'Ends Today: Summer Cookware & Bakeware up to 50% off.';
  links: string = 'Shop Now';
  info_pop_2: string =
    "Choose 2-day shipping for delivery by Father's Day. Free ground shipping over $75.*";
  links_2: string = 'See Details';
  constructor() {}

  getPop() {
    let result: string[] = [];
    result.push(this.info_pop);
    result.push(this.links);
    return result;
  }
  getPop_2() {
    let result: string[] = [];
    result.push(this.info_pop_2);
    result.push(this.links_2);
    return result;
  }
}
