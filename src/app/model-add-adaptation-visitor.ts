import { SafeStyle } from '@angular/platform-browser';

import { AdaptiveUibuttonComponent } from './Adaptive-UI-Elements/adaptive-uibutton/adaptive-uibutton.component';
import { Visitor } from './visitor';
import { AdaptUiModelBase } from './Adaptive-UI-DataModel/adapt-ui-model-base';
import { Type } from '@angular/core';
export class ModelAddAdaptationVisitor implements Visitor {
  public AddType: Type<any>;
  public _tags: string[];
  public _style: any;
  visit(model: AdaptUiModelBase, parent = null) {
    let match = false;
    if (this._tags.length > 0) {
      let i = 0;
      while (i < this._tags.length) {
        if (model.tags) {
          if (model.tags.includes(this._tags[i])) {
            match = true;
          }
        }
        i++;
      }
    }
    if (match) {
      const modelAdd = new AdaptUiModelBase;
      // Implement generic
      modelAdd.Component = AdaptiveUibuttonComponent;
      modelAdd.style = this._style;
      model.children.push(modelAdd);
    }
    if (model.children && model.children.length > 0) {
      let j = 0;
      while (j < model.children.length) {
        this.visit(model.children[j]);
        j++;
      }
    }
  }
}
