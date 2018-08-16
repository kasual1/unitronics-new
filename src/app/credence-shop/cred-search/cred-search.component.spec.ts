import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CredSearchComponent } from './cred-search.component';

describe('CredSearchComponent', () => {
  let component: CredSearchComponent;
  let fixture: ComponentFixture<CredSearchComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CredSearchComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CredSearchComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
