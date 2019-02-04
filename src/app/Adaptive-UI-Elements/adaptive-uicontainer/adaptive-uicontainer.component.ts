import { Container } from './../../AngularDSL/Container';
import { Button } from './../../AngularDSL/Button';
import { Element } from './../../AngularDSL/Element';
import { ModelResolutionService } from './../../model-resolution.service';
import { Component, ComponentFactoryResolver, ChangeDetectorRef, Type } from '@angular/core';
import { AdaptiveUielementbase } from '../adaptive-uielementbase';
import { AdaptiveUibuttonComponent } from '../adaptive-uibutton/adaptive-uibutton.component';

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
    if (model instanceof Container){
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
