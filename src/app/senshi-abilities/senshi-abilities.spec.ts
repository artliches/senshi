import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SenshiAbilities } from './senshi-abilities';

describe('SenshiAbilities', () => {
  let component: SenshiAbilities;
  let fixture: ComponentFixture<SenshiAbilities>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SenshiAbilities],
    }).compileComponents();

    fixture = TestBed.createComponent(SenshiAbilities);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
