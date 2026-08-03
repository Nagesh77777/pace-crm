import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class Modal {

  private isAddClientModalOpen = new BehaviorSubject<boolean>(false);
  private displayImportAudienceModal = new BehaviorSubject<boolean>(false);
  private displayTempalateModal = new BehaviorSubject<boolean>(false);

  // Observable for subscribers
  isAddClientModalOpen$ = this.isAddClientModalOpen.asObservable();

  openAddClientModal(): void {
    this.isAddClientModalOpen.next(true);
  }

  closeAddClientModal(): void {
    this.isAddClientModalOpen.next(false);
  }


  displayImportAudienceModal$ = this.displayImportAudienceModal.asObservable();

  openImportAudienceModal(): void {
    this.displayImportAudienceModal.next(true);
  }

  closeImportAudienceModal(): void {
    this.displayImportAudienceModal.next(false);
  }

  displayTempalateModal$ = this.displayTempalateModal.asObservable();

  openTemplateModal(): void {
    this.displayTempalateModal.next(true);
  }

  closeTemplateModal(): void {
    this.displayTempalateModal.next(false);
  }
}
