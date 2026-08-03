import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Client } from '../../../../models/client';
import { CommonModule } from '@angular/common';
import { MessageService } from 'primeng/api'; // 1. PrimeNG MessageService import

@Component({
  selector: 'app-selected-audience',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './selected-audience.html',
  styleUrl: './selected-audience.scss',
})
export class SelectedAudience {

  @Input() selectedAudience: Client[] = [];
  @Output() removeClient = new EventEmitter<Client>();
  @Output() composeMessage = new EventEmitter<void>();

  // 5. Inject MessageService in constructor
  constructor(private messageService: MessageService) { }

  onRemove(client: Client): void {
    this.removeClient.emit(client);

    // Toast Notification jab client remove ho
    this.messageService.add({
      severity: 'warn',
      summary: `Removed ${client.name} from selected audience.`,
      life: 1000
    });
  }

  onCompose(): void {
    if (this.selectedAudience.length === 0) {
      this.messageService.add({
        severity: 'error',
        summary: 'Error',
        detail: 'Please select at least one client.',
        life: 2000
      });
      return;
    }

    this.composeMessage.emit();

    this.messageService.add({
      severity: 'success',
      summary: 'Updated',
      detail: `Proceeding with ${this.selectedAudience.length} client(s).`,
      life: 2000
    });
  }
}