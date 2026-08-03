import { Component } from '@angular/core';
import { ClientDirectory } from "../client-directory/client-directory";
import { SelectedAudience } from "../selected-audience/selected-audience";
import { Client } from '../../../../models/client';
import { Router } from '@angular/router';
import { OutreachData } from '../../../../core/services/outreach-data';

@Component({
  selector: 'app-client-directory-view',
  imports: [ClientDirectory, SelectedAudience],
  templateUrl: './client-directory-view.html',
  styleUrl: './client-directory-view.scss',
})
export class ClientDirectoryView {


  constructor(
    private router: Router,
    private outeachDataService: OutreachData
  ) { }

  clients: Client[] = [
    { id: 1, name: 'Alex Rivera', email: 'alex.r@example.com', avatar: 'https://i.pravatar.cc/150?img=11' },
    { id: 2, name: 'Sarah Jenkins', email: 'sarah.j@example.com', avatar: 'https://i.pravatar.cc/150?img=5' },
    { id: 3, name: 'Michael Chen', email: 'm.chen@example.com', avatar: 'https://i.pravatar.cc/150?img=33' },
    { id: 4, name: 'Emma Watson', email: 'emma.w@example.com', avatar: 'https://i.pravatar.cc/150?img=9' },
    { id: 5, name: 'David Kim', email: 'dkim@example.com', avatar: 'https://i.pravatar.cc/150?img=12' },
    { id: 6, name: 'Sophia Martinez', email: 'smartinez@example.com', avatar: 'https://i.pravatar.cc/150?img=47' },
    { id: 7, name: 'James Wilson', email: 'j.wilson@example.com', avatar: 'https://i.pravatar.cc/150?img=14' },
    { id: 8, name: 'Olivia Davis', email: 'olivia.d@example.com', avatar: 'https://i.pravatar.cc/150?img=20' }
  ];

  selectedAudience: Client[] = [];

  ngOnInit(): void {
    // Default initial selected list
    this.selectedAudience = [
      this.clients[1], // Sarah Jenkins
      this.clients[3], // Emma Watson
      this.clients[0]  // Alex Rivera
    ];
  }

  // Full Card Click Handler -> Adds or Removes from Right Side Panel
  handleToggleSelect(client: Client): void {
    const exists = this.selectedAudience.some(c => c.id === client.id);
    if (exists) {
      this.selectedAudience = this.selectedAudience.filter(c => c.id !== client.id);
    } else {
      this.selectedAudience = [...this.selectedAudience, client];
    }
  }

  // Send Button Click Handler -> Direct action for that single client
  handleSendSingleClient(client: Client): void {
    this.router.navigate(['/crm']);
  }

  // Cross (X) Button Click on Right Side Panel
  handleRemoveClient(client: Client): void {
    this.selectedAudience = this.selectedAudience.filter(c => c.id !== client.id);
  }

  // Compose Message Click on Right Side Panel
  handleComposeMessage(): void {
     console.log("Selected Audience:", this.selectedAudience);
    if (this.selectedAudience.length === 0) {
      alert("Please select at least one client");
      return;
    }


    this.outeachDataService.setData(
      this.selectedAudience
    );
    this.router.navigate(['/crm']);
  }

}
