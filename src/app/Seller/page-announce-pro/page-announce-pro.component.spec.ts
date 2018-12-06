import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PageAnnounceProComponent } from './page-announce-pro.component';

describe('PageAnnounceProComponent', () => {
  let component: PageAnnounceProComponent;
  let fixture: ComponentFixture<PageAnnounceProComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PageAnnounceProComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PageAnnounceProComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
