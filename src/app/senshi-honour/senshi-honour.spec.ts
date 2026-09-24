import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SenshiHonour } from './senshi-honour';

describe('SenshiHonour', () => {
  let component: SenshiHonour;
  let fixture: ComponentFixture<SenshiHonour>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SenshiHonour],
    }).compileComponents();

    fixture = TestBed.createComponent(SenshiHonour);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
