import { Component, ElementRef, EventEmitter, Input, Output } from '@angular/core';
import { CommonModule } from '@angular/common';  // Import CommonModule for ngClass

@Component({
  selector: 'lib-button',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './button.component.html',
  styleUrl: './button.component.css'
})
export class ButtonComponent {
  @Input() color: "primary" | "success" | "danger" = "primary";
  @Input() disabled: boolean = false;
  @Input() outline: boolean = false;
  @Input() text = "";
  @Output() onClick = new EventEmitter<any>();

  rootClass: string | undefined;
  classMap: any;

  constructor(private elementRef: ElementRef) {}
  ngOnInit() {
      this.rootClass = this.elementRef.nativeElement.tagName.toLowerCase();
      this.updateClassMap();
  }
  updateClassMap() {
      this.classMap = {
          [`${this.rootClass}`]: true,
          [`${this.rootClass}--${this.color}`]: !!this.color,
          [`${this.rootClass}--outline`]: this.outline,
          [`${this.rootClass}--disabled`]: this.disabled,
      };
  }
  ngOnChanges() {
      this.updateClassMap();
  }
}
