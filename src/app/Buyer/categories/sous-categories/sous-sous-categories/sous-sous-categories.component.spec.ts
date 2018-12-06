import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SousSousCategoriesComponent } from './sous-sous-categories.component';

describe('SousSousCategoriesComponent', () => {
  let component: SousSousCategoriesComponent;
  let fixture: ComponentFixture<SousSousCategoriesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SousSousCategoriesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SousSousCategoriesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
