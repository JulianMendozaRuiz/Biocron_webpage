import { Component, OnInit } from '@angular/core';
import HeaderClass from '../../models/header/header';
import { HeaderService } from '../../_app-services/header/header.service';

@Component({
  selector: 'comp-header',
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss',
})
export class HeaderComponent implements OnInit {
  protected headerTags: HeaderClass | null = null;

  constructor(private headerService: HeaderService) {}

  async ngOnInit(): Promise<void> {
    this.headerTags = await this.headerService.getHeaderTags();
  }
}
