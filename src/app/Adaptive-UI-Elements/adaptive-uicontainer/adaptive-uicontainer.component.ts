import { Component, OnInit, Input, ViewChild, ComponentFactoryResolver, ViewChildren, OnChanges, ChangeDetectorRef } from '@angular/core';
import { AdaptiveUIBindingAnchorDirective } from 'src/app/AdaptiveUIBindingAnchorDirective';

@Component({
  selector: 'app-adaptive-uicontainer',
  templateUrl: './adaptive-uicontainer.component.html',
  styleUrls: ['./adaptive-uicontainer.component.css']
})
export class AdaptiveUIContainerComponent {
  @Input() doNotGoDeeper = false;
  currentAdIndex = -1;
  @ViewChildren(AdaptiveUIBindingAnchorDirective) adHost: AdaptiveUIBindingAnchorDirective[];
  public children = [];
  constructor(private componentFactoryResolver: ComponentFactoryResolver, private changeDec: ChangeDetectorRef) { }

  // tslint:disable-next-line:use-life-cycle-interface
  ngAfterViewChecked() {
  if ( !this.doNotGoDeeper) {
    this.children.push(1);
    this.children.push(1);
  }
  this.loadComponent();
  this.changeDec.detectChanges();
  }

  loadComponent() {
    if (this.doNotGoDeeper) {
      return;
    }
    const componentFactory = this.componentFactoryResolver.resolveComponentFactory(AdaptiveUIContainerComponent);
    this.adHost.forEach(element => {
      const viewContainerRef = element.viewContainerRef;
      viewContainerRef.clear();

    const componentRef = viewContainerRef.createComponent(componentFactory);
    (<AdaptiveUIContainerComponent>componentRef.instance).doNotGoDeeper = true;

    });
    }
}
