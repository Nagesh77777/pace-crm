import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ManageTemplatesModal } from './manage-templates-modal';

describe('ManageTemplatesModal', () => {
  let component: ManageTemplatesModal;
  let fixture: ComponentFixture<ManageTemplatesModal>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ManageTemplatesModal],
    }).compileComponents();

    fixture = TestBed.createComponent(ManageTemplatesModal);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
