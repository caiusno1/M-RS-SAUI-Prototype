import { AdaptiveUibuttonComponent } from './../Adaptive-UI-Elements/adaptive-uibutton/adaptive-uibutton.component';
import { Component, Type } from '@angular/core';
export class AdaptUiModelBase {
  public children: AdaptUiModelBase[];
  public Component: Type<any>;
  public isBlue: boolean;
  public applyAdaptation(component: Type<any>) {
    if (this.isBlue) {
      (<AdaptiveUibuttonComponent><any>component).isBlueVar = true;
    }
  }
}
