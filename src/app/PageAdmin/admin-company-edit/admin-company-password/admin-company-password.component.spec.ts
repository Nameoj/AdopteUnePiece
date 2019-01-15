import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminCompanyPasswordComponent } from './admin-company-password.component';

describe('AdminCompanyPasswordComponent', () => {
  let component: AdminCompanyPasswordComponent;
  let fixture: ComponentFixture<AdminCompanyPasswordComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AdminCompanyPasswordComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AdminCompanyPasswordComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
