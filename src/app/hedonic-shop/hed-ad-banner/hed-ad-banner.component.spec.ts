import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HedAdBannerComponent } from './hed-ad-banner.component';

describe('HedAdBannerComponent', () => {
  let component: HedAdBannerComponent;
  let fixture: ComponentFixture<HedAdBannerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HedAdBannerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HedAdBannerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
