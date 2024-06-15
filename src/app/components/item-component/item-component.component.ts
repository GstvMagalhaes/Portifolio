import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-item-component',
  standalone: true,
  imports: [],
  templateUrl: './item-component.component.html',
  styleUrl: './item-component.component.css',
})
export class ItemComponentComponent {
  @Output() toggle = new EventEmitter<void>();
  constructor() {}

  ngOnInit() {}

  onToggle() {
    this.toggle.emit();
  }
}
