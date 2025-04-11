import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { RouterLink, RouterLinkActive, RouterOutlet } from '@angular/router';
import { ButtonModule } from 'primeng/button';
import { ContactUsComponent } from './contact-us/contact-us.component';
import { ViewHeadingComponent } from './view-heading/view-heading.component';
import { BoldPipe } from './pipes/bold.pipe';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { InputTextModule } from 'primeng/inputtext';
import { InputMaskModule } from 'primeng/inputmask';

@NgModule({
  declarations: [
    HeaderComponent,
    FooterComponent,
    ContactUsComponent,
    ViewHeadingComponent,
    BoldPipe,
  ],
  imports: [
    CommonModule,
    RouterOutlet,
    RouterLink,
    RouterLinkActive,
    ButtonModule,
    FormsModule,
    ReactiveFormsModule,
    InputTextModule,
    InputMaskModule,
  ],
  exports: [
    HeaderComponent,
    FooterComponent,
    ContactUsComponent,
    ViewHeadingComponent,
    BoldPipe,
    FormsModule,
    ReactiveFormsModule,
    ButtonModule,
    InputTextModule,
    InputMaskModule,
  ],
})
export class SharedModule {}
