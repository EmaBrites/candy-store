import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CandyAboutComponent } from './candy-about.component';

describe('CandyAboutComponent', () => {
  let component: CandyAboutComponent;
  let fixture: ComponentFixture<CandyAboutComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CandyAboutComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CandyAboutComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
