import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AdaptiveUICoreComponent } from './adaptive-uicore.component';

describe('AdaptiveUICoreComponent', () => {
  let component: AdaptiveUICoreComponent;
  let fixture: ComponentFixture<AdaptiveUICoreComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AdaptiveUICoreComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AdaptiveUICoreComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
