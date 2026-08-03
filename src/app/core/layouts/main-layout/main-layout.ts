import { Component } from '@angular/core';
import { Header } from '../components/header/header';
import { Footer } from '../components/footer/footer';
import { Sidebar } from '../components/sidebar/sidebar';
import { RouterLink, RouterOutlet } from '@angular/router';
import { AddClientModal } from '../../../features/modal/components/add-client-modal/add-client-modal';
import { ImportAudienceModal } from "../../../features/modal/components/import-audience-modal/import-audience-modal";
import { ManageTemplatesModal } from '../../../features/modal/components/manage-templates-modal/manage-templates-modal';

@Component({
  selector: 'app-main-layout',
  standalone:true,
  imports: [Header, Footer, Sidebar, RouterOutlet, AddClientModal, ImportAudienceModal, ImportAudienceModal, ManageTemplatesModal],
  templateUrl: './main-layout.html',
  styleUrl: './main-layout.scss',
})
export class MainLayout {}
