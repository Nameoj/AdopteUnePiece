import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AnnounceItemComponent } from './announce-item.component';

describe('AnnounceItemComponent', () => {
  let component: AnnounceItemComponent;
  let fixture: ComponentFixture<AnnounceItemComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AnnounceItemComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AnnounceItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
