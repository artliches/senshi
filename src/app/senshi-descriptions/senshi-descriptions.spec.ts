import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SenshiDescriptions } from './senshi-descriptions';

describe('SenshiDescriptions', () => {
  let component: SenshiDescriptions;
  let fixture: ComponentFixture<SenshiDescriptions>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SenshiDescriptions],
    }).compileComponents();

    fixture = TestBed.createComponent(SenshiDescriptions);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
