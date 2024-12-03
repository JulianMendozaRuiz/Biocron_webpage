import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { ContactRoutingModule } from './contact-routing.module';
import { ContactComponent } from './contact.component';
import { ContactFormComponent } from './contact-form/contact-form.component';
import { ContactUsComponent } from './contact-us/contact-us.component';
import { ContactHeadingComponent } from './contact-heading/contact-heading.component';
import { ButtonModule } from 'primeng/button';
import { InputTextModule } from 'primeng/inputtext';

@NgModule({
  declarations: [
    ContactComponent,
    ContactFormComponent,
    ContactUsComponent,
    ContactHeadingComponent,
  ],
  imports: [
    CommonModule,
    ContactRoutingModule,
    FormsModule,
    ButtonModule,
    InputTextModule,
  ],
})
export class ContactModule {}
