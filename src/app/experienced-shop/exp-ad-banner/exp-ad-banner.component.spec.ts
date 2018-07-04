import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ExpAdBannerComponent } from './exp-ad-banner.component';

describe('ExpAdBannerComponent', () => {
  let component: ExpAdBannerComponent;
  let fixture: ComponentFixture<ExpAdBannerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ExpAdBannerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ExpAdBannerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
