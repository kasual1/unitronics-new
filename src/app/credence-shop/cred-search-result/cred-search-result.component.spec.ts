import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CredSearchResultComponent } from './cred-search-result.component';

describe('CredSearchResultComponent', () => {
  let component: CredSearchResultComponent;
  let fixture: ComponentFixture<CredSearchResultComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CredSearchResultComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CredSearchResultComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
