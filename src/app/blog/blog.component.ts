import { Component, OnInit } from '@angular/core';
import { WixService } from '../_app-services/wix.service';

@Component({
  selector: 'comp-blog',
  templateUrl: './blog.component.html',
  styleUrl: './blog.component.scss',
})
export class BlogComponent implements OnInit {
  constructor(private wixService: WixService) {}

  async ngOnInit(): Promise<void> {}
}
