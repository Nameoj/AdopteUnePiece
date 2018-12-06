import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TabAnnounceComponent } from './tab-announce.component';

describe('TabAnnounceComponent', () => {
  let component: TabAnnounceComponent;
  let fixture: ComponentFixture<TabAnnounceComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TabAnnounceComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TabAnnounceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
