import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminCompanyEditComponent } from './admin-company-edit.component';

describe('AdminCompanyEditComponent', () => {
  let component: AdminCompanyEditComponent;
  let fixture: ComponentFixture<AdminCompanyEditComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AdminCompanyEditComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AdminCompanyEditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
