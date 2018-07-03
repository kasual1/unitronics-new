import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ExpMainContentComponent } from './exp-main-content.component';

describe('ExpMainContentComponent', () => {
  let component: ExpMainContentComponent;
  let fixture: ComponentFixture<ExpMainContentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ExpMainContentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ExpMainContentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
