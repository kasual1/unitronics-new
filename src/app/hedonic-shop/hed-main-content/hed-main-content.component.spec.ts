import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HedMainContentComponent } from './hed-main-content.component';

describe('HedMainContentComponent', () => {
  let component: HedMainContentComponent;
  let fixture: ComponentFixture<HedMainContentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HedMainContentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HedMainContentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
