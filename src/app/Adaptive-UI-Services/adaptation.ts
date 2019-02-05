import { SafeStyle } from '@angular/platform-browser';
export enum AdaptationKind {Style, Add, Remove}
export class Adaptation {
  params: any;
  targetTags: string[];
  kind: AdaptationKind;
}
