import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HedSearchComponent } from './hed-search.component';

describe('HedSearchComponent', () => {
  let component: HedSearchComponent;
  let fixture: ComponentFixture<HedSearchComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HedSearchComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HedSearchComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
