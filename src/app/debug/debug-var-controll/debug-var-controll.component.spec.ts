import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DebugVarControllComponent } from './debug-var-controll.component';

describe('DebugVarControllComponent', () => {
  let component: DebugVarControllComponent;
  let fixture: ComponentFixture<DebugVarControllComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DebugVarControllComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DebugVarControllComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
