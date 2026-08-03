import { Component, OnInit, OnDestroy } from '@angular/core';
import { FormBuilder, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { Subscription } from 'rxjs';
import { CommonModule } from '@angular/common';
import { Modal } from '../../../../core/services/modal'; // Check path according to your folder structure

export interface TemplateModel {
  id?: string;
  name: string;
  subject: string;
  content: string;
}

@Component({
  selector: 'app-manage-templates-modal',
  imports: [CommonModule, FormsModule, ReactiveFormsModule],
  templateUrl: './manage-templates-modal.html',
  styleUrl: './manage-templates-modal.scss',
})
export class ManageTemplatesModal implements OnInit, OnDestroy {

  isOpen: boolean = false;
  templateForm!: FormGroup;
  private modalSub!: Subscription;

  // Pre-loaded existing templates
  existingTemplates: TemplateModel[] = [
    { id: '1', name: 'Flight Delay Notice', subject: 'Important: Flight Schedule Change', content: 'Dear {{first_name}}, your flight {{flight_number}} has been delayed.' },
    { id: '2', name: 'Winter Promo Alert', subject: 'Special Offer Just For You!', content: 'Hi {{first_name}}, check out our latest winter discounts.' }
  ];

  selectedTemplateId: string = 'new';

  constructor(
    private modalService: Modal,
    private fb: FormBuilder
  ) {}

  ngOnInit(): void {
    // 1. Modal visibility listener (Aapki service ke exact observable name se bind kiya hai)
    this.modalSub = this.modalService.displayTempalateModal$.subscribe(state => {
      this.isOpen = state;
    });

    // 2. Reactive Form setup
    this.templateForm = this.fb.group({
      name: ['', Validators.required],
      subject: ['', Validators.required],
      content: ['', Validators.required]
    });
  }

  // Handle template selection from top dropdown
  onTemplateSelect(event: Event): void {
    const selectElement = event.target as HTMLSelectElement;
    this.selectedTemplateId = selectElement.value;

    if (this.selectedTemplateId === 'new') {
      this.templateForm.reset();
    } else {
      const selected = this.existingTemplates.find(t => t.id === this.selectedTemplateId);
      if (selected) {
        this.templateForm.patchValue({
          name: selected.name,
          subject: selected.subject,
          content: selected.content
        });
      }
    }
  }

  // Close modal calling your service function
  closeModal(): void {
    this.templateForm.reset();
    this.selectedTemplateId = 'new';
    this.modalService.closeTemplateModal();
  }

  onSubmit(): void {
    if (this.templateForm.valid) {
      const templateData: TemplateModel = {
        id: this.selectedTemplateId !== 'new' ? this.selectedTemplateId : undefined,
        ...this.templateForm.value
      };
      
      console.log('Template Data Saved:', templateData);
      alert('Template Saved Successfully!');
      this.closeModal();
    } else {
      this.templateForm.markAllAsTouched();
    }
  }

  ngOnDestroy(): void {
    if (this.modalSub) {
      this.modalSub.unsubscribe();
    }
  }

}