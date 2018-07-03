import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ExpDetailPageComponent } from './exp-detail-page.component';

describe('ExpDetailPageComponent', () => {
  let component: ExpDetailPageComponent;
  let fixture: ComponentFixture<ExpDetailPageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ExpDetailPageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ExpDetailPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
