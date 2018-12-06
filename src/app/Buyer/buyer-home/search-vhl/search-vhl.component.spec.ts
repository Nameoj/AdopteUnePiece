import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SearchVhlComponent } from './search-vhl.component';

describe('SearchVhlComponent', () => {
  let component: SearchVhlComponent;
  let fixture: ComponentFixture<SearchVhlComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SearchVhlComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SearchVhlComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
