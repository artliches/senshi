import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SenshiJob } from './senshi-job';

describe('SenshiJob', () => {
  let component: SenshiJob;
  let fixture: ComponentFixture<SenshiJob>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SenshiJob],
    }).compileComponents();

    fixture = TestBed.createComponent(SenshiJob);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
