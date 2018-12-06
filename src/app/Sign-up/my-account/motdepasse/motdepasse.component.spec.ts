import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MotdepasseComponent } from './motdepasse.component';

describe('MotdepasseComponent', () => {
  let component: MotdepasseComponent;
  let fixture: ComponentFixture<MotdepasseComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MotdepasseComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MotdepasseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
