import { AdaptUiModelBase } from 'src/app/Adaptive-UI-DataModel/adapt-ui-model-base';
import { SafeStyle } from '@angular/platform-browser';
export enum AdaptationKind {Style, Add, Remove}
export class Adaptation {
  params: any;
  targetTags: string[];
  targetModelElement: AdaptUiModelBase;
  kind: AdaptationKind;
}
