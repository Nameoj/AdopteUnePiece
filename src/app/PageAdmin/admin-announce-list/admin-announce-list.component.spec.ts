import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminAnnounceListComponent } from './admin-announce-list.component';

describe('AdminAnnounceListComponent', () => {
  let component: AdminAnnounceListComponent;
  let fixture: ComponentFixture<AdminAnnounceListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AdminAnnounceListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AdminAnnounceListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
