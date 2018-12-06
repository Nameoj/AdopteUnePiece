import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TabHistoriqueComponent } from './tab-historique.component';

describe('TabHistoriqueComponent', () => {
  let component: TabHistoriqueComponent;
  let fixture: ComponentFixture<TabHistoriqueComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TabHistoriqueComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TabHistoriqueComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
