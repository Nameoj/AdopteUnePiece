import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminAnnounceDetailsComponent } from './admin-announce-details.component';

describe('AdminAnnounceDetailsComponent', () => {
  let component: AdminAnnounceDetailsComponent;
  let fixture: ComponentFixture<AdminAnnounceDetailsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AdminAnnounceDetailsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AdminAnnounceDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
