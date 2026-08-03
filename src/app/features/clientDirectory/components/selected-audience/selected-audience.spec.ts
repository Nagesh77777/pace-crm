import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SelectedAudience } from './selected-audience';

describe('SelectedAudience', () => {
  let component: SelectedAudience;
  let fixture: ComponentFixture<SelectedAudience>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SelectedAudience],
    }).compileComponents();

    fixture = TestBed.createComponent(SelectedAudience);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
