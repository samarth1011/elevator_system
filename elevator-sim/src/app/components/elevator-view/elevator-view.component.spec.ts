import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ElevatorViewComponent } from './elevator-view.component';

describe('ElevatorViewComponent', () => {
  let component: ElevatorViewComponent;
  let fixture: ComponentFixture<ElevatorViewComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ElevatorViewComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ElevatorViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
