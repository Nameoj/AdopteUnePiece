import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminBuyerListComponent } from './admin-buyer-list.component';

describe('AdminBuyerListComponent', () => {
  let component: AdminBuyerListComponent;
  let fixture: ComponentFixture<AdminBuyerListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AdminBuyerListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AdminBuyerListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
