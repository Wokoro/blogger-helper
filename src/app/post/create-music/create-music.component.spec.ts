import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateMusicComponent } from './create-music.component';

describe('CreateMusicComponent', () => {
  let component: CreateMusicComponent;
  let fixture: ComponentFixture<CreateMusicComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CreateMusicComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CreateMusicComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
