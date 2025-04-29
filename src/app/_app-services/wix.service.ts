import { Injectable } from '@angular/core';
import { items } from '@wix/data';
import { createClient, OAuthStrategy } from '@wix/sdk';
import { environment } from '../../environments/environment';

@Injectable({
  providedIn: 'root',
})
export class WixService {
  public wixClient: any;

  async createClient() {
    this.wixClient = createClient({
      modules: { items },
      auth: OAuthStrategy({ clientId: environment.WIX_CLIENT_ID || '' }),
    });
  }
}
