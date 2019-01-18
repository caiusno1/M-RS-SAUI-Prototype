import { AdaptUiModelBase } from './../../Adaptive-UI-DataModel/adapt-ui-model-base';
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
  public model: AdaptUiModelBase;
  public children: AdaptUiModelBase[];
  constructor(private componentFactoryResolver: ComponentFactoryResolver, private changeDec: ChangeDetectorRef) { }

  // tslint:disable-next-line:use-life-cycle-interface
  ngAfterViewChecked() {
  this.loadComponent();
  this.changeDec.detectChanges();
  }

  public loadComponent() {
    if (this.doNotGoDeeper) {
      return;
    }
    let  i = 0;
    if (this.adHost !== null) {
    this.adHost.forEach(element => {
      const componentFactory = this.componentFactoryResolver.resolveComponentFactory(this.children[i].Component);
      const viewContainerRef = element.viewContainerRef;
      viewContainerRef.clear();

    const componentRef = viewContainerRef.createComponent(componentFactory);
    (<AdaptiveUIContainerComponent>componentRef.instance).model = this.model.children[i];
    (<AdaptiveUIContainerComponent>componentRef.instance).children = this.model.children[i].children;
    i++;
    });
    }
  }
}
