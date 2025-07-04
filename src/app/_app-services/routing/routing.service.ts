import { Injectable } from '@angular/core';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root',
})
export class RoutingService {
  private routePaths: string[] = [];

  constructor(private router: Router) {
    this.routePaths = this.router.config.map((route) => route.path || '');
  }

  get RoutePaths(): string[] {
    return this.routePaths;
  }

  get currentRoute(): string {
    return this.router.url;
  }
}
