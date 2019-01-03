import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HomeAnnounceComponent } from './home-announce.component';

describe('HomeAnnounceComponent', () => {
  let component: HomeAnnounceComponent;
  let fixture: ComponentFixture<HomeAnnounceComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HomeAnnounceComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HomeAnnounceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
