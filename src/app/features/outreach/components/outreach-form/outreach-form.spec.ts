import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OutreachForm } from './outreach-form';

describe('OutreachForm', () => {
  let component: OutreachForm;
  let fixture: ComponentFixture<OutreachForm>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [OutreachForm],
    }).compileComponents();

    fixture = TestBed.createComponent(OutreachForm);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
