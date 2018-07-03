import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ExpSearchResultComponent } from './exp-search-result.component';

describe('ExpSearchResultComponent', () => {
  let component: ExpSearchResultComponent;
  let fixture: ComponentFixture<ExpSearchResultComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ExpSearchResultComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ExpSearchResultComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
