import { Component, HostListener } from '@angular/core';
import { ServiceService } from '../../_app-services/_service/service.service';

@Component({
  selector: 'comp-key-services',
  templateUrl: './key-services.component.html',
  styleUrl: './key-services.component.scss',
})
export class KeyServicesComponent {
  innerWidth: number = window.innerWidth;
  breakpoint: number = 1015; // Define the breakpoint for screen width

  constructor(protected serviceService: ServiceService) {}

  @HostListener('window:resize', ['$event'])
  onResize() {
    this.innerWidth = window.innerWidth;
  }

  get screenWidthLessThanBreakpoint(): boolean {
    return this.innerWidth < this.breakpoint;
  }
}
