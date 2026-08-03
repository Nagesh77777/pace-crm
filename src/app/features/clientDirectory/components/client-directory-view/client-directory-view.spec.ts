import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ClientDirectoryView } from './client-directory-view';

describe('ClientDirectoryView', () => {
  let component: ClientDirectoryView;
  let fixture: ComponentFixture<ClientDirectoryView>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ClientDirectoryView],
    }).compileComponents();

    fixture = TestBed.createComponent(ClientDirectoryView);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
