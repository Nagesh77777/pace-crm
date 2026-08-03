import { Component, Input } from '@angular/core';
import { ChannelType } from '../outreach-form/outreach-form';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-live-preview',
  imports: [CommonModule],
  templateUrl: './live-preview.html',
  styleUrl: './live-preview.scss',
})
export class LivePreview {

  @Input() channel: ChannelType = 'email';
  @Input() emailData = { subject: '', body: '' };
  @Input() whatsappData = { message: '' };
  @Input() webpushData = { title: '', message: '', icon: '', url: '' };

}
