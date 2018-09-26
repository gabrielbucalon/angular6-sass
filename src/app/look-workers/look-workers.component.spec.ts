import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LookWorkersComponent } from './look-workers.component';

describe('LookWorkersComponent', () => {
  let component: LookWorkersComponent;
  let fixture: ComponentFixture<LookWorkersComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LookWorkersComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LookWorkersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
