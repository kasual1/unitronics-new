import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UtSearchComponent } from './ut-search.component';

describe('UtSearchComponent', () => {
  let component: UtSearchComponent;
  let fixture: ComponentFixture<UtSearchComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UtSearchComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UtSearchComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
