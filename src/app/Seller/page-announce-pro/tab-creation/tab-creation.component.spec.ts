import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TabCreationComponent } from './tab-creation.component';

describe('TabCreationComponent', () => {
  let component: TabCreationComponent;
  let fixture: ComponentFixture<TabCreationComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TabCreationComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TabCreationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
