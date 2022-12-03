import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CandyHomeComponent } from './candy-home.component';

describe('CandyHomeComponent', () => {
  let component: CandyHomeComponent;
  let fixture: ComponentFixture<CandyHomeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CandyHomeComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CandyHomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
