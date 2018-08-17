import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CredDetailPageComponent } from './cred-detail-page.component';

describe('CredDetailPageComponent', () => {
  let component: CredDetailPageComponent;
  let fixture: ComponentFixture<CredDetailPageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CredDetailPageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CredDetailPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
