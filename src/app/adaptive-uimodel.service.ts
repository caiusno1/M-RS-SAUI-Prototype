import { AdaptiveUICoreComponent } from './adaptive-uicore/adaptive-uicore.component';
import { map } from 'rxjs/operators';
import { AdaptUiModelBase } from 'src/app/Adaptive-UI-DataModel/adapt-ui-model-base';
import { Subject, BehaviorSubject } from 'rxjs';
import { Injectable } from '@angular/core';
import { RoutingModel, AdaptiveRoute } from './Adaptive-UI-DataModel/routing-model';
import { Router, Route} from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AdaptiveUIModelService {
  public UIdataModel: Subject<AdaptUiModelBase>;
  public model: AdaptUiModelBase;
  public routingModel: BehaviorSubject<RoutingModel>;
  public routing: RoutingModel;
  constructor(private router: Router) {
    this.UIdataModel = new Subject<AdaptUiModelBase>();
    this.UIdataModel.subscribe(data => {
      this.model = data;
      });
    this.routingModel = new BehaviorSubject<RoutingModel>(new RoutingModel);
  }
}
