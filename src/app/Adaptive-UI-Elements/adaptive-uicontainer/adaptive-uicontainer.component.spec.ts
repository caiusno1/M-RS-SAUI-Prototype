import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AdaptiveUIContainerComponent } from './adaptive-uicontainer.component';

describe('AdaptiveUIContainerComponent', () => {
  let component: AdaptiveUIContainerComponent;
  let fixture: ComponentFixture<AdaptiveUIContainerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AdaptiveUIContainerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AdaptiveUIContainerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
