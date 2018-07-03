import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HedDetailPageComponent } from './hed-detail-page.component';

describe('HedDetailPageComponent', () => {
  let component: HedDetailPageComponent;
  let fixture: ComponentFixture<HedDetailPageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HedDetailPageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HedDetailPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
