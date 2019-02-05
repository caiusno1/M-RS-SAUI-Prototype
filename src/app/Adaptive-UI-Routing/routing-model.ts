import { AdaptUiModelBase } from '../experimentation_area/adapt-ui-model-base';
import { Page } from '../AngularDSL/Page';
export class RoutingModel {
  public routes: AdaptiveRoute[];
  constructor() {
    this.routes = [];
  }
}
export class AdaptiveRoute {
  public path: string;
  public model: Page;
  constructor(ppath: string, pmodel: Page) {
    this.path = ppath;
    this.model = pmodel;
  }
}
