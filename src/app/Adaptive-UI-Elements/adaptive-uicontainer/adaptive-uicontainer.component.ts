import { DomSanitizer } from '@angular/platform-browser';
import { Component, ComponentFactoryResolver, ViewChildren, ChangeDetectorRef } from '@angular/core';
import { AdaptiveUielementbase } from '../adaptive-uielementbase';

@Component({
  selector: 'app-adaptive-uicontainer',
  templateUrl: './adaptive-uicontainer.component.html',
  styleUrls: ['./adaptive-uicontainer.component.css']
})
export class AdaptiveUIContainerComponent extends AdaptiveUielementbase {

  constructor(private componentFactoryResolver: ComponentFactoryResolver, private changeDec: ChangeDetectorRef) {
  super();
  }

  // tslint:disable-next-line:use-life-cycle-interface
  ngAfterViewChecked() {
   this.loadComponent();
   this.changeDec.detectChanges();
  }

  public loadComponent() {
    let  i = 0;
    if (this.adHost !== undefined) {
    this.adHost.forEach(element => {
      const componentFactory = this.componentFactoryResolver.resolveComponentFactory(this.children[i].Component);
      const viewContainerRef = element.viewContainerRef;
      viewContainerRef.clear();

    const componentRef = viewContainerRef.createComponent(componentFactory);
    (<AdaptiveUielementbase>componentRef.instance).model = this.model.children[i];
    (<AdaptiveUielementbase>componentRef.instance).children = this.model.children[i].children;
    this.model.children[i].ComponentInstace = componentRef.instance;
    i++;
    });
    }
  }
}
