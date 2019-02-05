import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AdaptiveUIHeadingComponent } from './adaptive-uiheading.component';

describe('AdaptiveUIHeadingComponent', () => {
  let component: AdaptiveUIHeadingComponent;
  let fixture: ComponentFixture<AdaptiveUIHeadingComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AdaptiveUIHeadingComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AdaptiveUIHeadingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
