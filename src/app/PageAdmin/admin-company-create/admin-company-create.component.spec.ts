import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminCompanyCreateComponent } from './admin-company-create.component';

describe('AdminCompanyCreateComponent', () => {
  let component: AdminCompanyCreateComponent;
  let fixture: ComponentFixture<AdminCompanyCreateComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AdminCompanyCreateComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AdminCompanyCreateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
