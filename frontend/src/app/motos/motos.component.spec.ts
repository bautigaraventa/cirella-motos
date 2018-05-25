import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MotosComponent } from './motos.component';

describe('MotosComponent', () => {
  let component: MotosComponent;
  let fixture: ComponentFixture<MotosComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MotosComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MotosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
