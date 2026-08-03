import { Component, Input } from '@angular/core';
import { ChannelType, OutreachForm } from '../outreach-form/outreach-form';
import { CustomerProfile } from '../customer-profile/customer-profile';
import { LivePreview } from '../live-preview/live-preview';
import { OutreachData } from '../../../../core/services/outreach-data';
import { MessageService } from 'primeng/api';

@Component({
  selector: 'app-outreach',
  imports: [CustomerProfile, LivePreview, OutreachForm],
  templateUrl: './outreach.html',
  styleUrl: './outreach.scss',
})
export class Outreach {

  constructor(
    private outreachDataService: OutreachData,
    private messageService:MessageService
  ) { }

  selectedClients: any[] = [];
  recipientText: string = '';
  @Input() recipient: string = '';

  currentChannel: ChannelType = 'email';
  formData: any = {
    email: { subject: 'Important update regarding your upcoming flight to Bali', body: 'Hi Alex,\n\nWe wanted to inform you that there has been a slight change in the departure time for your flight to Bali (Flight GA882) on Oct 12.\n\nThe new departure time is 14:30 PM (previously 13:00 PM). Please ensure you arrive at the airport at least 3 hours before the new departure time.\n\nIf you need any assistance with airport transfers due to this change, please reply to this email.' },
    whatsapp: { message: '✈️ *Flight Update: Pace Travels*\n\nHi Alex! Your upcoming flight GA882 to Bali has a new departure time: *14:30 PM*.\n\nPlease arrive 3 hours prior. Tap below to view your updated itinerary or chat with an agent if you need help adjusting your airport transfer. 👇' },
    webpush: { title: 'Flight Schedule Change ⚠️', message: 'Your flight GA882 to Bali is now departing at 14:30 PM. Tap to view details.', icon: '', url: '' }
  };

  onChannelChange(channel: ChannelType) {
    this.currentChannel = channel;
  }

  onFormDataChange(data: any) {
    this.formData = data;
  }

  ngOnInit() {

    this.outreachDataService.outreachData$
      .subscribe(data => {

        console.log("Outreach received:", data);

        if (data) {

          this.selectedClients = data;

          this.recipientText = data
            .map((client: any) =>
              `${client.name} (${client.email})`
            )
            .join(', ');

        }

      });

  }

  // Success Toast Show karne ke liye Method
  showSuccessToast(recipientCount: number = 4) {
    this.messageService.add({
      severity: 'success',
      summary: `${recipientCount} recipients added to campaign.`,
      life: 4000 // 4 seconds baad auto disappear
    });
  }

  // Error Toast Show karne ke liye Method
  showErrorToast(errorMessage: string) {
    this.messageService.add({
      severity: 'error',
      summary: errorMessage,
      life: 4000
    });
  }



}
