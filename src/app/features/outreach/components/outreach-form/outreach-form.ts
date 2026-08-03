import { CommonModule } from '@angular/common';
import { Component, EventEmitter, Input, Output } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Modal } from '../../../../core/services/modal';


export type ChannelType = 'email' | 'whatsapp' | 'webpush';

@Component({
  selector: 'app-outreach-form',
  imports: [CommonModule, FormsModule],
  templateUrl: './outreach-form.html',
  styleUrl: './outreach-form.scss',
})
export class OutreachForm {
  constructor(
    private modalService : Modal
  ){}
  activeChannel: ChannelType = 'email';

  @Input() recipient:string = '';


  // Email state
  emailSubject = 'Important update regarding your upcoming flight to Bali';
  emailBody = `Hi Alex,\n\nWe wanted to inform you that there has been a slight change in the departure time for your flight to Bali (Flight GA882) on Oct 12.\n\nThe new departure time is 14:30 PM (previously 13:00 PM). Please ensure you arrive at the airport at least 3 hours before the new departure time.\n\nIf you need any assistance with airport transfers due to this change, please reply to this email.`;

  // WhatsApp state
  selectedWhatsappTemplate = 'Flight Update Alert';
  whatsappMessage = `✈️ *Flight Update: Pace Travels*\n\nHi Alex! Your upcoming flight GA882 to Bali has a new departure time: *14:30 PM*.\n\nPlease arrive 3 hours prior. Tap below to view your updated itinerary or chat with an agent if you need help adjusting your airport transfer. 👇`;

  // Web Push state
  pushTitle = 'Flight Schedule Change ⚠️';
  pushMessage = 'Your flight GA882 to Bali is now departing at 14:30 PM. Tap to view details.';
  pushIconUrl = 'https://...';
  pushClickUrl = 'https://portal.pacetravels.com/itinerary/PT-8832A';

  @Output() channelChange = new EventEmitter<ChannelType>();
  @Output() formDataChange = new EventEmitter<any>();

  setChannel(channel: ChannelType) {
    this.activeChannel = channel;
    this.channelChange.emit(channel);
    this.emitData();
  }

  emitData() {
    this.formDataChange.emit({
      channel: this.activeChannel,
      email: { subject: this.emailSubject, body: this.emailBody },
      whatsapp: { message: this.whatsappMessage },
      webpush: { title: this.pushTitle, message: this.pushMessage, icon: this.pushIconUrl, url: this.pushClickUrl }
    });
  }

  openTemplateModal(event: Event) {
    event.preventDefault();
    this.modalService.openTemplateModal();
  }

}
