import { SafeStyle } from '@angular/platform-browser';

import { AdaptiveUibuttonComponent } from './Adaptive-UI-Elements/adaptive-uibutton/adaptive-uibutton.component';
import { AdaptUiModelBase } from './Adaptive-UI-DataModel/adapt-ui-model-base';
import { BaseVisitor } from './base-visitor';
import { Element } from './AngularDSL/Element';
import { Container } from './AngularDSL/Container';
export class ModelAddAdaptationVisitor extends BaseVisitor {
  public addModel: Element;
  public _tags: string[];
  visit(model: Element, parent = null) {
    this.findElements(model);
  }
  foundElement(model: Element) {
    if (model instanceof Container){
      model.elements.push(this.addModel);
    }
  }
  foundParent(_element: Element, _parent: Element) {}
}
