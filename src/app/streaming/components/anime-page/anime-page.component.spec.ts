import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AnimePageComponent } from './anime-page.component';

describe('AnimePageComponent', () => {
  let component: AnimePageComponent;
  let fixture: ComponentFixture<AnimePageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AnimePageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AnimePageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
