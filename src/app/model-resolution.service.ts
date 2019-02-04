import { AdaptiveUibuttonComponent } from './Adaptive-UI-Elements/adaptive-uibutton/adaptive-uibutton.component';
import { Element } from './AngularDSL/Element';
import { Injectable, Type, ComponentFactoryResolver } from '@angular/core';
import { Button } from './AngularDSL/Button';

@Injectable({
  providedIn: 'root'
})
export class ModelResolutionService {

  constructor(private componentFactoryResolver: ComponentFactoryResolver, private modelResolver: ModelResolutionService ) { }
  public resolve(model: Element): Type<any> {
    if (model instanceof Button){
      return AdaptiveUibuttonComponent;
    }
  }
}
