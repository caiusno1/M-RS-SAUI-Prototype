import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AdaptiveUIParagraphComponent } from './adaptive-uiparagraph.component';

describe('AdaptiveUIParagraphComponent', () => {
  let component: AdaptiveUIParagraphComponent;
  let fixture: ComponentFixture<AdaptiveUIParagraphComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AdaptiveUIParagraphComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AdaptiveUIParagraphComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
