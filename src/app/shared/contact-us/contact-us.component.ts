import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ContactUsService } from '../../_app-services/contact_us/contact-us.service';

@Component({
  selector: 'comp-contact-us',
  templateUrl: './contact-us.component.html',
  styleUrl: './contact-us.component.scss',
})
export class ContactUsComponent implements OnInit {
  constructor(
    protected contactService: ContactUsService,
    private router: Router,
  ) {}

  async ngOnInit(): Promise<void> {
    try {
      if (!this.contactService.contactUsContent) {
        this.contactService.contactUsContent =
          await this.contactService.getContactUsCardContent();
      }
    } catch (error) {
      console.error('Error during initialization:', error);
    }
  }

  async goToContactUs() {
    try {
      await this.router.navigate(['contacto']);
    } catch (error) {
      console.error('Navigation error:', error);
    }
  }
}
