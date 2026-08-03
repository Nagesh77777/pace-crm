import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddClientModal } from './add-client-modal';

describe('AddClientModal', () => {
  let component: AddClientModal;
  let fixture: ComponentFixture<AddClientModal>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AddClientModal],
    }).compileComponents();

    fixture = TestBed.createComponent(AddClientModal);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
