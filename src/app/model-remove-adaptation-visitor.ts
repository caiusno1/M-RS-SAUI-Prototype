import { Visitor } from './visitor';
import { AdaptUiModelBase } from './Adaptive-UI-DataModel/adapt-ui-model-base';
import { BaseVisitor } from './base-visitor';
export class ModelRemoveAdaptationVisitor extends BaseVisitor {
  visit(model: AdaptUiModelBase, parent: AdaptUiModelBase) {
    this.findparent(model, parent);
  }
  foundElement(_element: AdaptUiModelBase) {}
  foundParent(_element: AdaptUiModelBase, _parent: AdaptUiModelBase) {
    _parent.children.splice( _parent.children.indexOf(_element), 1 );
  }
}
