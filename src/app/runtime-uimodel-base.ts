import { AdaptiveUielementbase } from './Adaptive-UI-Elements/adaptive-uielementbase';

export class RuntimeUIModelBase {
  public tags: string;
  private _ComponentInstace: AdaptiveUielementbase;
  private _style: string;

  private set ComponentInstace(instance) {
    this._ComponentInstace = instance;
    if (this._style){
      instance.setStyle(JSON.parse(this._style));
    }
  }
  private get ComponentInstace() {
    return this._ComponentInstace;
  }

  public set __style(styleString: any) {
    if (this.ComponentInstace && styleString) {
      this.ComponentInstace.setStyle(JSON.parse(styleString));
    }
    this._style = styleString;
  }
}
