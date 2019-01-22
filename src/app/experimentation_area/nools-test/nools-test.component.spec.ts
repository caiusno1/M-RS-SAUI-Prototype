import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NoolsTestComponent } from './nools-test.component';

describe('NoolsTestComponent', () => {
  let component: NoolsTestComponent;
  let fixture: ComponentFixture<NoolsTestComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NoolsTestComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NoolsTestComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
