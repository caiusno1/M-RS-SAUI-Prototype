import { ModelResolutionService } from './../model-resolution.service';
import { Element } from './../AngularDSL/Element';
import { AdaptUiModelBase } from '../Adaptive-UI-DataModel/adapt-ui-model-base';
import { AdaptiveUIBindingAnchorDirective } from '../AdaptiveUIBindingAnchorDirective';
import { ViewChildren, ComponentFactoryResolver } from '@angular/core';
import { Container } from '../AngularDSL/Container';

export class AdaptiveUielementbase {
  @ViewChildren(AdaptiveUIBindingAnchorDirective) adHost: AdaptiveUIBindingAnchorDirective[];
  private _model: Element;
  public adatptstyle = {'background-color': 'red'};

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
