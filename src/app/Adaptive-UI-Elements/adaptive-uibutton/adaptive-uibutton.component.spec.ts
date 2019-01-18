import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AdaptiveUibuttonComponent } from './adaptive-uibutton.component';

describe('AdaptiveUibuttonComponent', () => {
  let component: AdaptiveUibuttonComponent;
  let fixture: ComponentFixture<AdaptiveUibuttonComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AdaptiveUibuttonComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AdaptiveUibuttonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
