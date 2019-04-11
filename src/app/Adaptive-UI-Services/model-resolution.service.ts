import { AdaptiveUIHeadingComponent } from './../Adaptive-UI-Elements/adaptive-uiheading/adaptive-uiheading.component';
import { Caption } from './../WAML/Caption';
import { Element } from './../WAML/Element';
import { Injectable, Type} from '@angular/core';
import { AdaptiveUibuttonComponent } from '../Adaptive-UI-Elements/adaptive-uibutton/adaptive-uibutton.component';
import { Input } from '../WAML/Input';

@Injectable({
  providedIn: 'root'
})
export class ModelResolutionService {

  constructor() { }
  public resolve(model: Element): Type<any> {
    if (model instanceof Input){
      return AdaptiveUibuttonComponent;
    }
    else if (model instanceof Caption){
      return AdaptiveUIHeadingComponent;
    }
  }
}
