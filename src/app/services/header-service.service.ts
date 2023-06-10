import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class HeaderServiceService {
  private eventhide = new Subject<void>();
  private eventshow = new Subject<void>();
  togglehide$ = this.eventhide.asObservable();
  toggleShow$ = this.eventshow.asObservable();
  constructor() {}
  toggle_show() {
    this.eventshow.next();
  }
  toggle_hide() {
    this.eventhide.next();
  }
}
