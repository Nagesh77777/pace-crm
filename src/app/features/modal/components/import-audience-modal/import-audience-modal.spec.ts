import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ImportAudienceModal } from './import-audience-modal';

describe('ImportAudienceModal', () => {
  let component: ImportAudienceModal;
  let fixture: ComponentFixture<ImportAudienceModal>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ImportAudienceModal],
    }).compileComponents();

    fixture = TestBed.createComponent(ImportAudienceModal);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
