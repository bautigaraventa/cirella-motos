import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MotoThumbnailComponent } from './moto-thumbnail.component';

describe('MotoThumbnailComponent', () => {
  let component: MotoThumbnailComponent;
  let fixture: ComponentFixture<MotoThumbnailComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MotoThumbnailComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MotoThumbnailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
