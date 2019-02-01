import { AdaptiveUielementbase } from './../Adaptive-UI-Elements/adaptive-uielementbase';
import { AdaptiveUibuttonComponent } from './../Adaptive-UI-Elements/adaptive-uibutton/adaptive-uibutton.component';
import { Component, Type, ComponentRef } from '@angular/core';
export class AdaptUiModelBase {
  public children: AdaptUiModelBase[];
  public Component: Type<any>;
  private _ComponentInstance: AdaptiveUielementbase;
  public set  ComponentInstace(instance) {
    this._ComponentInstance = instance;
    this.style = this._style;
  }
  public get ComponentInstace() {
    return this._ComponentInstance;
  }
  public tags: string;
  private _style: string;
  constructor() {
  }
  public set style(styleString: any) {
    if (this.ComponentInstace) {
      this.ComponentInstace.setStyle(styleString);
    }
    this._style = styleString;
  }
  public toJSON() {
    return {
      'children': (this.children) ? (this.children.map(child => child.toJSON())) : undefined,
      'Component': this.Component.name,
      'tags': this.tags,
      '_style': this._style
    };
  }
}
