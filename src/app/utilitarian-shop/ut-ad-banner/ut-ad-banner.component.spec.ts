import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UtAdBannerComponent } from './ut-ad-banner.component';

describe('UtAdBannerComponent', () => {
  let component: UtAdBannerComponent;
  let fixture: ComponentFixture<UtAdBannerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UtAdBannerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UtAdBannerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
