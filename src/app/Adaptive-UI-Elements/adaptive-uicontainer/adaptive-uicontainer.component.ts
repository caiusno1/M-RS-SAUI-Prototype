import { WebPage } from './../../WAML/WebPage';
import { Container } from './../../WAML/Container';
import { Element } from './../../WAML/Element';
import { ModelResolutionService } from '../../Adaptive-UI-Services/model-resolution.service';
import { Component, ComponentFactoryResolver, ChangeDetectorRef, Type } from '@angular/core';
import { AdaptiveUielementbase } from '../adaptive-uielementbase';
//
@Component({
  selector: 'app-adaptive-uicontainer',
  templateUrl: './adaptive-uicontainer.component.html',
  styleUrls: ['./adaptive-uicontainer.component.css']
})
export class AdaptiveUIContainerComponent extends AdaptiveUielementbase {
  public model: Container;
  constructor(
    private changeDec: ChangeDetectorRef,
    private modelResolver: ModelResolutionService,
    private componentFactoryResolver: ComponentFactoryResolver) {
    super();
  }

  // tslint:disable-next-line:use-life-cycle-interface
  ngAfterViewChecked() {
   this.loadComponent(this.adHost, this.model);
   this.changeDec.detectChanges();
  }
  public resolve(model: Element): Type<any> {
    if (model.constructor === Container || model.constructor === WebPage){
      return AdaptiveUIContainerComponent;
    }
    else {
      return this.modelResolver.resolve(model);
    }
  }
  public loadComponent(adHost, model: Element) {
    let  i = 0;
    if (adHost !== undefined) {
      if (model instanceof Container){
        adHost.forEach(ele => {
          const componentFactory = this.componentFactoryResolver.resolveComponentFactory(this.resolve(model.elements[i]));
          const viewContainerRef = ele.viewContainerRef;
          viewContainerRef.clear();

          const componentRef = viewContainerRef.createComponent(componentFactory);
          (<AdaptiveUielementbase>componentRef.instance).model = (<Container>model).elements[i];
          (<any>(<Container>model).elements[i]).ComponentInstace = componentRef.instance;
          i++;
        });
      }
    }
  }
}
