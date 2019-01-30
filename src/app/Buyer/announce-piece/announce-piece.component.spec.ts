import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AnnouncePieceComponent } from './announce-piece.component';

describe('AnnouncePieceComponent', () => {
  let component: AnnouncePieceComponent;
  let fixture: ComponentFixture<AnnouncePieceComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AnnouncePieceComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AnnouncePieceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
