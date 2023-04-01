import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CallDialComponent } from './call-dial.component';

describe('CallDialComponent', () => {
  let component: CallDialComponent;
  let fixture: ComponentFixture<CallDialComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CallDialComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CallDialComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
