import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CredCartComponent } from './cred-cart.component';

describe('CredCartComponent', () => {
  let component: CredCartComponent;
  let fixture: ComponentFixture<CredCartComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CredCartComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CredCartComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
