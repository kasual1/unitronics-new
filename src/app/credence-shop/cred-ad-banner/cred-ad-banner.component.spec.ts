import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CredAdBannerComponent } from './cred-ad-banner.component';

describe('CredAdBannerComponent', () => {
  let component: CredAdBannerComponent;
  let fixture: ComponentFixture<CredAdBannerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CredAdBannerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CredAdBannerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
