import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LibrairiesComponent } from './librairies.component';

describe('LibrairiesComponent', () => {
  let component: LibrairiesComponent;
  let fixture: ComponentFixture<LibrairiesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LibrairiesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LibrairiesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
