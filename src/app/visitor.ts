import { AdaptUiModelBase } from 'src/app/Adaptive-UI-DataModel/adapt-ui-model-base';
import { AdaptiveUielementbase } from './Adaptive-UI-Elements/adaptive-uielementbase';
import { visitAll } from '@angular/compiler/src/render3/r3_ast';

export interface Visitor {
  visit(model: AdaptUiModelBase, parent: AdaptUiModelBase);
}
