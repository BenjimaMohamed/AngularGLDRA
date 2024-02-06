import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Restaurants1Component } from './restaurants1.component';

describe('Restaurants1Component', () => {
  let component: Restaurants1Component;
  let fixture: ComponentFixture<Restaurants1Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Restaurants1Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Restaurants1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
