import { Element } from './../WAML/Element';
import { AdaptiveUIBindingAnchorDirective } from './Utility/AdaptiveUIBindingAnchorDirective';
import { ViewChildren} from '@angular/core';

export class AdaptiveUielementbase {
  @ViewChildren(AdaptiveUIBindingAnchorDirective) adHost: AdaptiveUIBindingAnchorDirective[];
  private _model: Element;
  public adatptstyle = null;
  constructor() {}
  public set model(uimodel: Element) {
    this._model = uimodel;
  }
  public get model() {
    return this._model;
  }
  public setStyle(style: any) {
    this.adatptstyle = style;
  }
}
