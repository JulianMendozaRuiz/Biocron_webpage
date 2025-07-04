import {
  Component,
  ElementRef,
  HostListener,
  OnInit,
  ViewChild,
} from '@angular/core';
import HeaderClass from '../../models/header/header';
import { HeaderService } from '../../_app-services/header/header.service';
import { RoutingService } from '../../_app-services/routing/routing.service';

@Component({
  selector: 'comp-header',
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss',
})
export class HeaderComponent implements OnInit {
  @ViewChild('headerContainer', { static: true })
  header!: ElementRef;
  windowIsTop: boolean = true;
  protected drawerVisible: boolean = false;

  protected headerTags: HeaderClass | null = null;

  constructor(
    private headerService: HeaderService,
    private routingService: RoutingService,
  ) {}

  @HostListener('window:scroll', ['$event'])
  onWindowScroll(event: Event): void {
    const scrollTop = (event.target as Document).documentElement.scrollTop;
    const belowThreshold = scrollTop >= this.header.nativeElement.offsetHeight;

    this.windowIsTop = !belowThreshold;
  }

  async ngOnInit(): Promise<void> {
    this.headerTags = await this.headerService.getHeaderTags();
  }

  toggleNavigationPanel(): void {
    this.drawerVisible = !this.drawerVisible;
  }

  isCurrentRoute(pPath: string): boolean {
    return this.routingService.currentRoute === pPath;
  }
}
