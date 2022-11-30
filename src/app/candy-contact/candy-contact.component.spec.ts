import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CandyContactComponent } from './candy-contact.component';

describe('CandyContactComponent', () => {
  let component: CandyContactComponent;
  let fixture: ComponentFixture<CandyContactComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CandyContactComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CandyContactComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
