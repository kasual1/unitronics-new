import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HedLandingPageComponent } from './hed-landing-page.component';

describe('HedLandingPageComponent', () => {
  let component: HedLandingPageComponent;
  let fixture: ComponentFixture<HedLandingPageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HedLandingPageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HedLandingPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
