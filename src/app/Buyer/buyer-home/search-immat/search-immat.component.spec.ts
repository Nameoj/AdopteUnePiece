import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SearchImmatComponent } from './search-immat.component';

describe('SearchImmatComponent', () => {
  let component: SearchImmatComponent;
  let fixture: ComponentFixture<SearchImmatComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SearchImmatComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SearchImmatComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
