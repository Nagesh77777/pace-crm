import { Component } from '@angular/core';
import { Modal } from '../../../../core/services/modal';
import { FormBuilder, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { Subscription } from 'rxjs';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-add-client-modal',
  imports: [CommonModule, FormsModule, ReactiveFormsModule],
  templateUrl: './add-client-modal.html',
  styleUrl: './add-client-modal.scss',
})
export class AddClientModal {

  isOpen: boolean = false;
  clientForm!: FormGroup;
  private modalSub!: Subscription;

  tierOptions: string[] = ['Standard', 'Silver', 'Gold', 'VIP'];

  constructor(
    private modalService: Modal,
    private fb: FormBuilder
  ) {}

  ngOnInit(): void {
    // Modal visibility listener
    this.modalSub = this.modalService.isAddClientModalOpen$.subscribe(state => {
      this.isOpen = state;
    });

    // Reactive Form setup matching design
    this.clientForm = this.fb.group({
      firstName: ['', Validators.required],
      lastName: [''],
      email: ['', [Validators.required, Validators.email]],
      phone: [''],
      travelerTier: ['Standard', Validators.required]
    });
  }

  closeModal(): void {
    this.clientForm.reset({ travelerTier: 'Standard' });
    this.modalService.closeAddClientModal();
  }

  onSubmit(): void {
    if (this.clientForm.valid) {
      console.log('New Client Profile Data:', this.clientForm.value);
      alert('Client Profile Saved Successfully!');
      this.closeModal();
    } else {
      this.clientForm.markAllAsTouched();
    }
  }

  ngOnDestroy(): void {
    if (this.modalSub) {
      this.modalSub.unsubscribe();
    }
  }

}
