/* eslint-disable @typescript-eslint/no-explicit-any */
import { Component, ElementRef, Input, OnInit } from '@angular/core';
import { quickStartViewerPlugins, RicosViewer } from '@wix/ricos';
import { ElementType } from 'react';

@Component({
  selector: 'comp-ricos-viewer',
  templateUrl: './ricos-viewer.component.html',
  styleUrl: './ricos-viewer.component.scss',
})
export class RicosViewerComponent implements OnInit {
  @Input() content: any;
  viewerPlugins: any;
  viewerProps = {
    content: {},
    plugins: {},
  };
  RicosViewer = RicosViewer as ElementType;

  constructor(protected readonly elementRef: ElementRef) {
    this.viewerPlugins = quickStartViewerPlugins();
  }

  ngOnInit(): void {
    this.viewerProps = {
      content: this.content,
      plugins: this.viewerPlugins,
    };
  }
}
