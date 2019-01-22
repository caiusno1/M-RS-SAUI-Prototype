import { AdaptUiModelBase } from './../../Adaptive-UI-DataModel/adapt-ui-model-base';
import { Component, ComponentFactoryResolver, ViewChildren, ChangeDetectorRef } from '@angular/core';
import { AdaptiveUIBindingAnchorDirective } from 'src/app/AdaptiveUIBindingAnchorDirective';

@Component({
  selector: 'app-adaptive-uicontainer',
  templateUrl: './adaptive-uicontainer.component.html',
  styleUrls: ['./adaptive-uicontainer.component.css']
})
export class AdaptiveUIContainerComponent {
  private _model: AdaptUiModelBase;
  @ViewChildren(AdaptiveUIBindingAnchorDirective) adHost: AdaptiveUIBindingAnchorDirective[];
  public set model(uimodel: AdaptUiModelBase) {
    this._model = uimodel;
  }
  public get model() {
    return this._model;
  }
  public children: AdaptUiModelBase[];
  constructor(private componentFactoryResolver: ComponentFactoryResolver, private changeDec: ChangeDetectorRef) { }

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
    (<AdaptiveUIContainerComponent>componentRef.instance).model = this.model.children[i];
    (<AdaptiveUIContainerComponent>componentRef.instance).children = this.model.children[i].children;
    i++;
    });
    }
  }
}
