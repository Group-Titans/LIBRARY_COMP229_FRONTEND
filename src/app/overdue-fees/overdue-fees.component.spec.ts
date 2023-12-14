import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OverdueFeesComponent } from './overdue-fees.component';

describe('OverdueFeesComponent', () => {
  let component: OverdueFeesComponent;
  let fixture: ComponentFixture<OverdueFeesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ OverdueFeesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(OverdueFeesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
