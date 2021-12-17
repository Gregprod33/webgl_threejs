import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SidemenupageComponent } from './sidemenupage.component';

describe('SidemenupageComponent', () => {
  let component: SidemenupageComponent;
  let fixture: ComponentFixture<SidemenupageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SidemenupageComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SidemenupageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
