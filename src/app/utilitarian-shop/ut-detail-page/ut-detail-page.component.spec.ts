import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UtDetailPageComponent } from './ut-detail-page.component';

describe('UtDetailPageComponent', () => {
  let component: UtDetailPageComponent;
  let fixture: ComponentFixture<UtDetailPageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UtDetailPageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UtDetailPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
