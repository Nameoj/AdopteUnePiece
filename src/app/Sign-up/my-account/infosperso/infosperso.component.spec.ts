import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { InfospersoComponent } from './infosperso.component';

describe('InfospersoComponent', () => {
  let component: InfospersoComponent;
  let fixture: ComponentFixture<InfospersoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ InfospersoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(InfospersoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
