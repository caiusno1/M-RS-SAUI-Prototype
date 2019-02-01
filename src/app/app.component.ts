import { AdaptiveUIModelService } from './adaptive-uimodel.service';
import { AdaptUiModelBase } from './Adaptive-UI-DataModel/adapt-ui-model-base';
import { AdaptiveUIContainerComponent } from './Adaptive-UI-Elements/adaptive-uicontainer/adaptive-uicontainer.component';
import { Component, Input, ViewChild, OnInit, ChangeDetectorRef } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {

  @ViewChild(AdaptiveUIContainerComponent) root: AdaptiveUIContainerComponent;
  constructor(public uiDMServ: AdaptiveUIModelService, private changeDec: ChangeDetectorRef) {

  }
  ngOnInit(): void {
    this.uiDMServ.UIdataModel.subscribe(dm => this.SetUpUI(dm) );
  }
  public SetUpUI(uiDM: AdaptUiModelBase) {
    this.root.model = uiDM;
    this.root.model.ComponentInstace = this.root;
    this.root.children = uiDM.children;
    this.changeDec.detectChanges();
  }
}
