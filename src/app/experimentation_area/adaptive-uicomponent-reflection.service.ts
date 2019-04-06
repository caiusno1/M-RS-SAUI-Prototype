/*import { AdaptiveUibuttonComponent } from './Adaptive-UI-Elements/adaptive-uibutton/adaptive-uibutton.component';
import { AdaptiveUIContainerComponent } from './Adaptive-UI-Elements/adaptive-uicontainer/adaptive-uicontainer.component';
import { Injectable, Type } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AdaptiveUIComponentReflectionService {
  private listOfTypes = [AdaptiveUIContainerComponent, AdaptiveUibuttonComponent];

  public AdaptiveUIComponentDict = {};
  constructor() {
    for (const type of this.listOfTypes) {
      this.AddComponent2Dict(type);
    }
  }
  private AddComponent2Dict(type: Type<any>) {
    this.AdaptiveUIComponentDict[type.name] = type;
  }
}*/
