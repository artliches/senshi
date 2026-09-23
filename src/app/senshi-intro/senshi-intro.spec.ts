import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SenshiIntro } from './senshi-intro';

describe('SenshiIntro', () => {
  let component: SenshiIntro;
  let fixture: ComponentFixture<SenshiIntro>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SenshiIntro],
    }).compileComponents();

    fixture = TestBed.createComponent(SenshiIntro);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
