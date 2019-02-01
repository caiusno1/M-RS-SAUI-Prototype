import { AdaptUiModelBase } from '../Adaptive-UI-DataModel/adapt-ui-model-base';
import { AdaptiveUIBindingAnchorDirective } from '../AdaptiveUIBindingAnchorDirective';
import { ViewChildren} from '@angular/core';

export class AdaptiveUielementbase {
  @ViewChildren(AdaptiveUIBindingAnchorDirective) adHost: AdaptiveUIBindingAnchorDirective[];
  private _model: AdaptUiModelBase;
  public adatptstyle = {'background-color': 'red'};

  constructor() {}
  public set model(uimodel: AdaptUiModelBase) {
    this._model = uimodel;
  }
  public get model() {
    return this._model;
  }
  public children: AdaptUiModelBase[];
  public setStyle(style: any) {
    this.adatptstyle = style;
  }
}
