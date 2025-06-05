import { Component, OnInit } from '@angular/core';
import { environment } from '../environments/environment';
import { WixService } from './_app-services/wix/wix.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent implements OnInit {
  title = 'Biocron';

  constructor(private wixService: WixService) {
    console.log('Biocron page initialized');
    console.log('Environment:', environment.ENV_NAME);
  }

  async ngOnInit(): Promise<void> {
    await this.wixService.createClient();
  }
}
