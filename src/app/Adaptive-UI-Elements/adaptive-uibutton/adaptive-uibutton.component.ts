import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { AdaptUiModelBase } from 'src/app/Adaptive-UI-DataModel/adapt-ui-model-base';

@Component({
  selector: 'app-adaptive-uibutton',
  templateUrl: './adaptive-uibutton.component.html',
  styleUrls: ['./adaptive-uibutton.component.css']
})
export class AdaptiveUibuttonComponent implements OnInit {

  public isBlueVar: boolean;
  public model: AdaptUiModelBase;
  constructor() {
   }

  ngOnInit() {
    this.model.applyAdaptation(<any>this);
  }

}
