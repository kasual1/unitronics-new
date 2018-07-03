import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UtLandingPageComponent } from './ut-landing-page.component';

describe('UtLandingPageComponent', () => {
  let component: UtLandingPageComponent;
  let fixture: ComponentFixture<UtLandingPageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UtLandingPageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UtLandingPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
