import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AdsLinkComponent } from './ads-link.component';

describe('AdsLinkComponent', () => {
  let component: AdsLinkComponent;
  let fixture: ComponentFixture<AdsLinkComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AdsLinkComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AdsLinkComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
