import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UtMainContentComponent } from './ut-main-content.component';

describe('UtMainContentComponent', () => {
  let component: UtMainContentComponent;
  let fixture: ComponentFixture<UtMainContentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UtMainContentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UtMainContentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
