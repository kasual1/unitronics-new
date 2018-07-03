import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UtSearchResultComponent } from './ut-search-result.component';

describe('UtSearchResultComponent', () => {
  let component: UtSearchResultComponent;
  let fixture: ComponentFixture<UtSearchResultComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UtSearchResultComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UtSearchResultComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
