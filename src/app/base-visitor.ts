import { element } from 'protractor';
import { AdaptUiModelBase } from './Adaptive-UI-DataModel/adapt-ui-model-base';
import { AdaptiveUibuttonComponent } from './Adaptive-UI-Elements/adaptive-uibutton/adaptive-uibutton.component';

export abstract class BaseVisitor {
  public _tags = [];
  findElements(model: AdaptUiModelBase, parent = null) {
    if (model.children && model.children.length > 0) {
      let j = 0;
      while (j < model.children.length) {
        this.findElements(model.children[j]);
        j++;
      }
    }
    if (this._tags.length > 0) {
      let i = 0;
      while (i < this._tags.length) {
        if (model.tags) {
          if (model.tags.includes(' ' + this._tags[i])
          || model.tags.includes(this._tags[i] + ' ')
          || model.tags === this._tags[i]
          ) {
            this.foundElement(model);
          }
        }
        i++;
      }
    }
  }
  findparent(model: AdaptUiModelBase, parent = null) {
    if (this._tags.length > 0 && model.children) {
      let i = 0;
      while (i < this._tags.length) {
        for (const child of model.children) {
          if (child.tags) {
            if (child.tags.includes(' ' + this._tags[i])
            || child.tags.includes(this._tags[i] + ' ')
            || child.tags === this._tags[i]
            ) {
              this.foundParent(child, model);
            }
          }
        }
        i++;
      }
    }
    if (model.children && model.children.length > 0) {
      let j = 0;
      while (j < model.children.length) {
        this.findparent(model.children[j], model);
        j++;
      }
    }
  }
  abstract foundElement(_element: AdaptUiModelBase);
  abstract foundParent(_element: AdaptUiModelBase, _parent: AdaptUiModelBase);
}
