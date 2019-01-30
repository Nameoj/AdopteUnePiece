import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SousCategoriesComponent } from './sous-categories.component';

describe('SousCategoriesComponent', () => {
  let component: SousCategoriesComponent;
  let fixture: ComponentFixture<SousCategoriesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SousCategoriesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SousCategoriesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
