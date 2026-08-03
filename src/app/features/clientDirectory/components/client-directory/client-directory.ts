import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Client } from '../../../../models/client';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { MessageService } from 'primeng/api'; // 1. PrimeNG MessageService import
import { ToastModule } from 'primeng/toast'; // 2. ToastModule import

@Component({
  selector: 'app-client-directory',
  standalone: true,
  imports: [CommonModule, FormsModule, ToastModule], // 3. Imports array me ToastModule add kiya
  providers: [MessageService], // 4. Provider register kiya
  templateUrl: './client-directory.html',
  styleUrl: './client-directory.scss',
})
export class ClientDirectory {
  
  @Input() clients: Client[] = [];
  @Input() selectedAudience: Client[] = [];

  // Card click -> Add to / Remove from Selected Audience list
  @Output() toggleSelect = new EventEmitter<Client>();

  // Send button click -> Direct individual send action
  @Output() sendSingleClient = new EventEmitter<Client>();

  searchQuery: string = '';

  // 5. Inject MessageService in constructor
  constructor(private messageService: MessageService) {}

  get filteredClients(): Client[] {
    if (!this.searchQuery.trim()) {
      return this.clients;
    }
    const query = this.searchQuery.toLowerCase();
    return this.clients.filter(c =>
      c.name.toLowerCase().includes(query) ||
      c.email.toLowerCase().includes(query)
    );
  }

  isSelected(client: Client): boolean {
    return this.selectedAudience.some(c => c.id === client.id);
  }

  // Full Card Click Event
  onCardClick(client: Client): void {
    const wasSelected = this.isSelected(client);
    this.toggleSelect.emit(client);

    // Toast Notification jab recipient list me add ya remove ho
    if (!wasSelected) {
      this.messageService.add({
        severity: 'success',
        summary: `Added ${client.name} to campaign audience.`
      });
    } else {
      this.messageService.add({
        severity: 'info',
        summary: `Removed ${client.name} from campaign audience.`
      });
    }
  }

  // Send Button Click Event
  onSendButtonClick(event: Event, client: Client): void {
    event.stopPropagation(); // Card selection click event ko rokne ke liye
    this.sendSingleClient.emit(client);

    // Single send success Toast Notification
    this.messageService.add({
      severity: 'success',
      summary: `Email sent successfully to ${client.name}!`
    });
  }
}