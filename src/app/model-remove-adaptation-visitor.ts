import { Visitor } from './visitor';
import { AdaptUiModelBase } from './Adaptive-UI-DataModel/adapt-ui-model-base';
export class ModelRemoveAdaptationVisitor implements Visitor {
  visit(model: AdaptUiModelBase, parent: AdaptUiModelBase) {
    throw new Error('Method not implemented.');
  }
}
