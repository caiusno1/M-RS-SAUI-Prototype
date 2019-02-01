import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AdapativeUIDebugInitializerComponent } from './adapative-ui-debug-initializer.component';

describe('AdapativeUIDebugInitializerComponent', () => {
  let component: AdapativeUIDebugInitializerComponent;
  let fixture: ComponentFixture<AdapativeUIDebugInitializerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AdapativeUIDebugInitializerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AdapativeUIDebugInitializerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
