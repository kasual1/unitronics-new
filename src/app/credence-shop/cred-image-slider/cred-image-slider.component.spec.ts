import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CredImageSliderComponent } from './cred-image-slider.component';

describe('CredImageSliderComponent', () => {
  let component: CredImageSliderComponent;
  let fixture: ComponentFixture<CredImageSliderComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CredImageSliderComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CredImageSliderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
