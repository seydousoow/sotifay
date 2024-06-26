import { Component, EventEmitter, Input, Output } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IconComponent } from '@sofitay/atoms';
import { OutsideClickDirective } from '@sofitay/outside-click';
import { OverlayComponent } from '../overlay/overlay.component';

@Component({
  selector: 'horizon-modal',
  standalone: true,
  imports: [CommonModule, IconComponent, OutsideClickDirective, OverlayComponent],
  templateUrl: './modal.component.html',
  styleUrls: ['./modal.component.css'],
})
export class ModalComponent {
  @Input() opened = false;
  @Input() sizeClass = 'sm:max-w-lg';
  @Input() xDismissible = false;
  @Input() horizontalAlignment: 'center' | 'start' | 'end' = 'center';
  @Input() verticalAlignment: 'center' | 'start' | 'end' = 'center';
  @Input() noBackground = false;
  @Output() closed = new EventEmitter<void>();

  open(): void {
    this.opened = true;
  }

  close(): void {
    this.opened = false;
    this.closed.emit();
  }
}
