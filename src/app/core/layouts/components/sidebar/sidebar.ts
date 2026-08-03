import { Component } from '@angular/core';
import { RouterLink, RouterLinkActive } from '@angular/router';
import { Modal } from '../../../services/modal';

@Component({
  selector: 'app-sidebar',
  standalone: true,
  imports: [RouterLink, RouterLinkActive],
  templateUrl: './sidebar.html',
  styleUrl: './sidebar.scss',
})
export class Sidebar {

  constructor(private modalService: Modal) { }

  openAddClientModal(event: Event): void {
    event.preventDefault(); // Prevent page route jump
    this.modalService.openAddClientModal(); // Opens modal globally
  }

  openImportAudience(event: Event) {
    event.preventDefault();
    this.modalService.openImportAudienceModal();
  }

  openTemplateModal(event: Event) {
    event.preventDefault();
    this.modalService.openTemplateModal();
  }

}
