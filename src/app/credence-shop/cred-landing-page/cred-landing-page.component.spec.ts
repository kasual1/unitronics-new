import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CredLandingPageComponent } from './cred-landing-page.component';

describe('CredLandingPageComponent', () => {
  let component: CredLandingPageComponent;
  let fixture: ComponentFixture<CredLandingPageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CredLandingPageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CredLandingPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
