import { Component, Input } from '@angular/core';

@Component({
  selector: 'lib-heading',
  standalone: true,
  imports: [],
  templateUrl: './heading.component.html',
  styleUrl: './heading.component.css'
})
export class HeadingComponent {
  @Input() text = "";
}
