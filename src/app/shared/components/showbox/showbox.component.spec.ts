import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ShowboxComponent } from './showbox.component';

describe('ShowboxComponent', () => {
  let component: ShowboxComponent;
  let fixture: ComponentFixture<ShowboxComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ShowboxComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ShowboxComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
