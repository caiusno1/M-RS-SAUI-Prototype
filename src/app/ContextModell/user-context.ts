import { ContextModelContainer } from './ContextModelContainer';

export class UserContext {
  contextModelRoot: ContextModelContainer;
  private _blind: boolean;
  private _age: number;
  public set age(agenumber: number) {
    this._age = agenumber;
    this.contextModelRoot.contextChanged.next(this.contextModelRoot);
  }
  public set blind(pblind: boolean) {
    this._blind = pblind;
    this.contextModelRoot.contextChanged.next(this.contextModelRoot);
  }
  constructor(context: ContextModelContainer) {
    this.contextModelRoot = context;
  }
}
