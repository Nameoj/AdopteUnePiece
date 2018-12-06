import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DataBaseManagmentComponent } from './data-base-managment.component';

describe('DataBaseManagmentComponent', () => {
  let component: DataBaseManagmentComponent;
  let fixture: ComponentFixture<DataBaseManagmentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DataBaseManagmentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DataBaseManagmentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
