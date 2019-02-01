import { Visitor } from './visitor';
import { AdaptUiModelBase } from './Adaptive-UI-DataModel/adapt-ui-model-base';
import { BaseVisitor } from './base-visitor';
export class StyleAdaptationVisitor extends BaseVisitor {
  public _tags: string[];
  public _style: any;
  visit(model: AdaptUiModelBase, parent = null) {
    this.findElements(model);
  }
  foundElement(_element: AdaptUiModelBase) {
    _element.style = this._style;
  }
  foundParent(_element: AdaptUiModelBase, _parent: AdaptUiModelBase) {
    throw new Error('Method not implemented.');
  }

}
