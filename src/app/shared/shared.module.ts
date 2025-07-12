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
import { TextareaModule } from 'primeng/textarea';
import { InputMaskModule } from 'primeng/inputmask';
import { DrawerModule } from 'primeng/drawer';
import { PanelModule } from 'primeng/panel';
import { RicosViewerComponent } from './ricos-viewer/ricos-viewer.component';
import { ReactComponentDirective } from '../directives/react-component.directive';
import { ReactWrapperComponent } from './react-component-wrapper/react-component-wrapper.component';

@NgModule({
  declarations: [
    HeaderComponent,
    FooterComponent,
    ContactUsComponent,
    ViewHeadingComponent,
    BoldPipe,
    RicosViewerComponent,
    ReactWrapperComponent,
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
    ReactComponentDirective,
    DrawerModule,
    PanelModule,
    ButtonModule,
    TextareaModule,
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
    TextareaModule,
    RicosViewerComponent,
  ],
})
export class SharedModule {}
