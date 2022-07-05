import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateVideoComponent } from './create-video.component';

describe('CreateVideoComponent', () => {
  let component: CreateVideoComponent;
  let fixture: ComponentFixture<CreateVideoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CreateVideoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CreateVideoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
