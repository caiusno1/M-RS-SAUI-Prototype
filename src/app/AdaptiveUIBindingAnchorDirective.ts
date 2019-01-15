import { Directive, ViewContainerRef } from '@angular/core';

@Directive({
  // tslint:disable-next-line:directive-selector
  selector: '[ad-ui-host]',
})
export class AdaptiveUIBindingAnchorDirective {
  constructor(public viewContainerRef: ViewContainerRef) { }
}
