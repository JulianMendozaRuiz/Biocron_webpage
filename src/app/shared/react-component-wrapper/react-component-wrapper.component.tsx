// react-wrapper.component.ts
import {
  AfterViewInit,
  Component,
  ElementRef,
  Input,
  OnDestroy,
  ViewChild,
} from '@angular/core';
import * as ReactDOM from 'react-dom/client';
import React from 'react';
import MyReactComponent from './my-react-component';

@Component({
  selector: 'app-react-wrapper',
  template: `<div #reactRoot></div>`,
  styleUrl: './react-component-wrapper.component.scss'

})
export class ReactWrapperComponent implements AfterViewInit, OnDestroy {
  @Input() content: any;
  @ViewChild('reactRoot', { static: true }) containerRef!: ElementRef;

  private reactRoot: ReactDOM.Root | null = null;

  ngAfterViewInit() {
    const container = this.containerRef.nativeElement;
    if (container) {
      this.reactRoot = ReactDOM.createRoot(container);
      this.reactRoot.render(<MyReactComponent content={this.content} />);
    } else {
      console.error('React container not found');
    }
  }

  ngOnDestroy() {
    this.reactRoot?.unmount();
  }
}
