import { AdaptUiModelBase } from 'src/app/Adaptive-UI-DataModel/adapt-ui-model-base';
import { Subject } from 'rxjs';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AdaptiveUIModelService {
  public UIdataModel: Subject<AdaptUiModelBase>;
  public model: AdaptUiModelBase;
  constructor() {
    this.UIdataModel = new Subject;
    this.UIdataModel.subscribe(data => {
      this.model = data;
      });
  }
}
