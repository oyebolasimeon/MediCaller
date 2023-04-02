import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SrcMainComponent } from './src-main.component';

describe('SrcMainComponent', () => {
  let component: SrcMainComponent;
  let fixture: ComponentFixture<SrcMainComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SrcMainComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SrcMainComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
