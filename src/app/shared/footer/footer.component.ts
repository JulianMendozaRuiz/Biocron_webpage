import { Component, OnInit } from '@angular/core';
import { FooterService } from '../../_app-services/footer/footer.service';
import FooterClass from '../../models/footer/footer';

@Component({
  selector: 'comp-footer',
  templateUrl: './footer.component.html',
  styleUrl: './footer.component.scss',
})
export class FooterComponent implements OnInit {
  protected footerContent!: FooterClass;

  constructor(private footerService: FooterService) {}

  async ngOnInit(): Promise<void> {
    this.footerContent = await this.footerService.getFooterContent();

    console.log('Footer content loaded:', this.footerContent);
  }
}
