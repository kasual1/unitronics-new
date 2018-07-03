import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ExpLandingPageComponent } from './exp-landing-page.component';

describe('ExpLandingPageComponent', () => {
  let component: ExpLandingPageComponent;
  let fixture: ComponentFixture<ExpLandingPageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ExpLandingPageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ExpLandingPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
