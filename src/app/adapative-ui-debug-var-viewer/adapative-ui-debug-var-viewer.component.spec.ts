import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AdapativeUIDebugVarViewerComponent } from './adapative-ui-debug-var-viewer.component';

describe('AdapativeUIDebugVarViewerComponent', () => {
  let component: AdapativeUIDebugVarViewerComponent;
  let fixture: ComponentFixture<AdapativeUIDebugVarViewerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AdapativeUIDebugVarViewerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AdapativeUIDebugVarViewerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
