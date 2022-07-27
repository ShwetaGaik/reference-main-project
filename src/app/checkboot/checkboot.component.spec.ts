import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CheckbootComponent } from './checkboot.component';

describe('CheckbootComponent', () => {
  let component: CheckbootComponent;
  let fixture: ComponentFixture<CheckbootComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CheckbootComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CheckbootComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
