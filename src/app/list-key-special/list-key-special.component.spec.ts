import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ListKeySpecialComponent } from './list-key-special.component';

describe('ListKeySpecialComponent', () => {
  let component: ListKeySpecialComponent;
  let fixture: ComponentFixture<ListKeySpecialComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ListKeySpecialComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ListKeySpecialComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
