import { Component, OnDestroy, OnInit } from '@angular/core';
import { Modal } from '../../../../core/services/modal';
import { Subscription } from 'rxjs';
import { DialogModule  } from "primeng/dialog";
import { CommonModule } from '@angular/common';
import { ButtonModule } from 'primeng/button';

@Component({
  selector: 'app-import-audience-modal',
  imports: [DialogModule, CommonModule, ButtonModule],
  templateUrl: './import-audience-modal.html',
  styleUrl: './import-audience-modal.scss',
})
export class ImportAudienceModal implements OnInit, OnDestroy {

  visible: boolean = false;
  selectedFile: File | null = null;
  isDragging: boolean = false;
  private modalSub!: Subscription;

  constructor(private modalService: Modal) {}

  ngOnInit(): void {
    this.modalSub = this.modalService.displayImportAudienceModal$.subscribe(state => {
      this.visible = state;
    });
  }

  onHide(): void {
    this.selectedFile = null;
    this.modalService.closeImportAudienceModal();
  }

  // File Input Selection
  onFileSelected(event: any): void {
    const file = event.target.files[0];
    if (file) {
      this.selectedFile = file;
    }
  }

  // Drag and Drop Handlers
  onDragOver(event: DragEvent): void {
    event.preventDefault();
    this.isDragging = true;
  }

  onDragLeave(event: DragEvent): void {
    event.preventDefault();
    this.isDragging = false;
  }

  onDrop(event: DragEvent): void {
    event.preventDefault();
    this.isDragging = false;
    if (event.dataTransfer?.files && event.dataTransfer.files.length > 0) {
      this.selectedFile = event.dataTransfer.files[0];
    }
  }

  onSubmit(): void {
    if (this.selectedFile) {
      console.log('Importing file:', this.selectedFile);
      alert(`File "${this.selectedFile.name}" imported successfully!`);
      this.onHide();
    }
  }

  ngOnDestroy(): void {
    if (this.modalSub) {
      this.modalSub.unsubscribe();
    }
  }

}
