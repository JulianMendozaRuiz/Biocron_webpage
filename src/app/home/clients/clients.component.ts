import { Component, Input } from '@angular/core';

@Component({
  selector: 'comp-clients',
  templateUrl: './clients.component.html',
  styleUrl: './clients.component.scss',
})
export class ClientsComponent {
  @Input() sideImage: string = '';
  @Input() tag: string = '';
  @Input() title: string = '';
  @Input() description: string = '';
  @Input() buttonText: string = '';
  @Input() clientLogos: Array<any> = [];
}
