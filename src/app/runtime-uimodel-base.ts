import { AdaptiveUielementbase } from './Adaptive-UI-Elements/adaptive-uielementbase';

export class RuntimeUIModelBase {
  public tags: string;
  private _ComponentInstace: AdaptiveUielementbase;
  private _style: string;

  private set ComponentInstace(instance) {
    this._ComponentInstace = instance;
    this.style = this._style;
  }
  private get ComponentInstace() {
    return this._ComponentInstace;
  }

  public set style(styleString: any) {
    if (this.ComponentInstace) {
      this.ComponentInstace.setStyle(styleString);
    }
    this._style = styleString;
  }
}
