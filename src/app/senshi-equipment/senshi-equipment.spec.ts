import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SenshiEquipment } from './senshi-equipment';

describe('SenshiEquipment', () => {
  let component: SenshiEquipment;
  let fixture: ComponentFixture<SenshiEquipment>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SenshiEquipment],
    }).compileComponents();

    fixture = TestBed.createComponent(SenshiEquipment);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
