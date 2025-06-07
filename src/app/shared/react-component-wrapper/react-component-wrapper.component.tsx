// react-wrapper.component.ts
import {
  AfterViewInit,
  Component,
  ElementRef,
  Input,
  OnDestroy,
} from '@angular/core';
import * as ReactDOM from 'react-dom/client';
import React from 'react';
import MyReactComponent from './my-react-component';

@Component({
  selector: 'app-react-wrapper',
  template: '<div [id]="rootId"></div>',
})
export class ReactWrapperComponent implements AfterViewInit, OnDestroy {
  @Input() content: any;
  rootId = `react-root-${Math.random().toString().replace('.', '')}`;

  private reactRoot: ReactDOM.Root | null = null;

  constructor(private el: ElementRef) {}

  ngAfterViewInit() {
    const container = this.el.nativeElement.querySelector(`#${this.rootId}`);
    if (container) {
      this.reactRoot = ReactDOM.createRoot(container);
      this.reactRoot.render(<MyReactComponent content={this.content} />);
    } else {
      console.error('React mount container not found.');
    }
  }

  ngOnDestroy() {
    this.reactRoot?.unmount();
  }
}
