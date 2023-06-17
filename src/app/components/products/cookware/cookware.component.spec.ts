import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CookwareComponent } from './cookware.component';

describe('CookwareComponent', () => {
  let component: CookwareComponent;
  let fixture: ComponentFixture<CookwareComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CookwareComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CookwareComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
