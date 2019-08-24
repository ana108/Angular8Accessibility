import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TestAnaComponent } from './test-ana.component';

describe('TestAnaComponent', () => {
  let component: TestAnaComponent;
  let fixture: ComponentFixture<TestAnaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TestAnaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TestAnaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
