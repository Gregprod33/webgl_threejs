import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EnjeuxComponent } from './enjeux.component';

describe('EnjeuxComponent', () => {
  let component: EnjeuxComponent;
  let fixture: ComponentFixture<EnjeuxComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EnjeuxComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EnjeuxComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
