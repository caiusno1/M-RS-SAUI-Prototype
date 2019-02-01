import { SafeStyle } from '@angular/platform-browser';

import { AdaptiveUibuttonComponent } from './Adaptive-UI-Elements/adaptive-uibutton/adaptive-uibutton.component';
import { Visitor } from './visitor';
import { AdaptUiModelBase } from './Adaptive-UI-DataModel/adapt-ui-model-base';
import { Type } from '@angular/core';
import { BaseVisitor } from './base-visitor';
export class ModelAddAdaptationVisitor extends BaseVisitor {
  public AddType: Type<any>;
  public _tags: string[];
  public _style: any;
  public _targetTags: string;
  visit(model: AdaptUiModelBase, parent = null) {
    this.findElements(model);
  }
  foundElement(model) {
    const modelAdd = new AdaptUiModelBase;
    // Implement generic
    modelAdd.Component = AdaptiveUibuttonComponent;
    modelAdd.style = this._style;
    modelAdd.tags = this._targetTags;
    model.children.push(modelAdd);
  }
  foundParent(_element: AdaptUiModelBase, _parent: AdaptUiModelBase) {}
}
