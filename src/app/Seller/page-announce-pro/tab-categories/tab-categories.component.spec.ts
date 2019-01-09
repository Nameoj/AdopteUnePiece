import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TabCategoriesComponent } from './tab-categories.component';

describe('TabCategoriesComponent', () => {
  let component: TabCategoriesComponent;
  let fixture: ComponentFixture<TabCategoriesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TabCategoriesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TabCategoriesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
