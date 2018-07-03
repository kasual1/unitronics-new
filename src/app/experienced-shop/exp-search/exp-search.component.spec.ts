import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ExpSearchComponent } from './exp-search.component';

describe('ExpSearchComponent', () => {
  let component: ExpSearchComponent;
  let fixture: ComponentFixture<ExpSearchComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ExpSearchComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ExpSearchComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
