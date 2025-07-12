import { Component, Input } from '@angular/core';
import { Router } from '@angular/router';
import AboutUsWhyUsClass from '../../models/about_us/about_us_why_us';

@Component({
  selector: 'comp-why-us',
  templateUrl: './why-us.component.html',
  styleUrl: './why-us.component.scss',
})
export class WhyUsComponent {
  @Input() whyUsContent!: AboutUsWhyUsClass;
  constructor(private router: Router) {}

  async goToContactUs() {
    await this.router.navigate(['contacto']);
  }
}
