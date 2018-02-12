import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AlertQueueComponent } from './alert-queue.component';

describe('AlertQueueComponent', () => {
  let component: AlertQueueComponent;
  let fixture: ComponentFixture<AlertQueueComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AlertQueueComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AlertQueueComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
