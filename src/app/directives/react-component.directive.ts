import { Directive, ElementRef, Input, OnInit } from '@angular/core';
import { create } from 'domain';
import { ComponentProps, createElement, ElementType } from 'react';
import ReactDOM from 'react-dom/client';

@Directive({
  selector: '[reactComponent]',
  standalone: true,
})
export class ReactComponentDirective<Comp extends ElementType>
  implements OnInit
{
  @Input() reactComponent!: Comp;
  @Input() reactComponentRoot!: ElementRef;
  @Input() props!: ComponentProps<Comp>;

  root!: ReactDOM.Root;

  ngOnInit() {
    this.root = ReactDOM.createRoot(this.reactComponentRoot.nativeElement);

    this.root.render(createElement(this.reactComponent, this.props));
  }
  ngOnChanges() {
    if (this.root) {
      this.root.render(createElement(this.reactComponent, this.props));
    }
  }

  ngOnDestroy() {
    this.root.unmount();
  }
}
