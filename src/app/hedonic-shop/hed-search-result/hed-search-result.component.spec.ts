import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HedSearchResultComponent } from './hed-search-result.component';

describe('HedSearchResultComponent', () => {
  let component: HedSearchResultComponent;
  let fixture: ComponentFixture<HedSearchResultComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HedSearchResultComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HedSearchResultComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
