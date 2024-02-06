import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Restaurants3Component } from './restaurants3.component';

describe('Restaurants3Component', () => {
  let component: Restaurants3Component;
  let fixture: ComponentFixture<Restaurants3Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Restaurants3Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Restaurants3Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
