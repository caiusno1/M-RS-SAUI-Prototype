import { AdaptUiModelBase } from '../experimentation_area/adapt-ui-model-base';
import { WebPage } from '../WAML/WebPage';
export class RoutingModel {
  public routes: AdaptiveRoute[];
  constructor() {
    this.routes = [];
  }
}
export class AdaptiveRoute {
  public path: string;
  public model: WebPage;
  constructor(ppath: string, pmodel: WebPage) {
    this.path = ppath;
    this.model = pmodel;
  }
}
