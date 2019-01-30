import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TabCompteComponent } from './tab-compte.component';

describe('TabCompteComponent', () => {
  let component: TabCompteComponent;
  let fixture: ComponentFixture<TabCompteComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TabCompteComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TabCompteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
