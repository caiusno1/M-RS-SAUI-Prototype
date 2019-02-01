import { AdaptUiModelBase } from './adapt-ui-model-base';
export class RoutingModel {
  public routes: AdaptiveRoute[];
  constructor() {
    this.routes = [];
  }
}
export class AdaptiveRoute {
  public path: string;
  public model: AdaptUiModelBase;
  constructor(ppath: string, pmodel: AdaptUiModelBase) {
    this.path = ppath;
    this.model = pmodel;
  }
}
