import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CandyCartComponent } from './candy-cart.component';

describe('CandyCartComponent', () => {
  let component: CandyCartComponent;
  let fixture: ComponentFixture<CandyCartComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CandyCartComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CandyCartComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
