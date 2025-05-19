import { Injectable } from '@angular/core';
import { items } from '@wix/data';
import {
  createClient,
  OAuthStrategy,
  IOAuthStrategy,
  WixClient,
} from '@wix/sdk';
import { files } from '@wix/media';
import { environment } from '../../environments/environment';

@Injectable({
  providedIn: 'root',
})
export class WixService {
  public wixClient:
    | WixClient<
        undefined,
        IOAuthStrategy,
        { items: typeof items; files: typeof files }
      >
    | undefined;

  constructor() {}

  async createClient() {
    this.wixClient = createClient({
      modules: { items, files },
      auth: OAuthStrategy({ clientId: environment.WIX_CLIENT_ID || '' }),
    });
  }
}
