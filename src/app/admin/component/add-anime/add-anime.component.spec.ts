import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddAnimeComponent } from './add-anime.component';

describe('AddAnimeComponent', () => {
  let component: AddAnimeComponent;
  let fixture: ComponentFixture<AddAnimeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddAnimeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddAnimeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
