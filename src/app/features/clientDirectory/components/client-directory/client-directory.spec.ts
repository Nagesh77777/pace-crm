import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ClientDirectory } from './client-directory';

describe('ClientDirectory', () => {
  let component: ClientDirectory;
  let fixture: ComponentFixture<ClientDirectory>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ClientDirectory],
    }).compileComponents();

    fixture = TestBed.createComponent(ClientDirectory);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
