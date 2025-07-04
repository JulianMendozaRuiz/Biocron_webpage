import { Component, OnInit } from '@angular/core';
import { WixService } from './_app-services/wix/wix.service';
import { PrimeNG } from 'primeng/config';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent implements OnInit {
  title = 'Biocron';

  constructor(
    private wixService: WixService,
    private primeng: PrimeNG,
  ) {}

  async ngOnInit(): Promise<void> {
    await this.wixService.createClient();
    this.primeng.ripple.set(true);
  }
}
