import { AdaptiveUIHeadingComponent } from './../Adaptive-UI-Elements/adaptive-uiheading/adaptive-uiheading.component';
import { Heading } from './../AngularDSL/Heading';
import { Element } from './../AngularDSL/Element';
import { Injectable, Type} from '@angular/core';
import { AdaptiveUibuttonComponent } from '../Adaptive-UI-Elements/adaptive-uibutton/adaptive-uibutton.component';
import { Button } from '../AngularDSL/Button';

@Injectable({
  providedIn: 'root'
})
export class ModelResolutionService {

  constructor() { }
  public resolve(model: Element): Type<any> {
    if (model instanceof Button){
      return AdaptiveUibuttonComponent;
    }
    else if (model instanceof Heading){
      return AdaptiveUIHeadingComponent;
    }
  }
}
