import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AdBlockComponent } from './ad-block.component';

describe('AdBlockComponent', () => {
  let component: AdBlockComponent;
  let fixture: ComponentFixture<AdBlockComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AdBlockComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AdBlockComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
