import { Component, Input } from '@angular/core';

@Component({
  selector: 'comp-home-about-us',
  templateUrl: './home-about-us.component.html',
  styleUrl: './home-about-us.component.scss',
})
export class HomeAboutUsComponent {
  @Input() backgroundImage: string = '';
  @Input() backgroundParticles: string = '';
  @Input() tag: string = '';
  @Input() description: string = '';
}
