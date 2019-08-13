import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AdaptVizComponent } from './adapt-viz.component';

describe('AdaptVizComponent', () => {
  let component: AdaptVizComponent;
  let fixture: ComponentFixture<AdaptVizComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AdaptVizComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AdaptVizComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
