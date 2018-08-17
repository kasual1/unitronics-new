import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CredMainContentComponent } from './cred-main-content.component';

describe('CredMainContentComponent', () => {
  let component: CredMainContentComponent;
  let fixture: ComponentFixture<CredMainContentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CredMainContentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CredMainContentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
