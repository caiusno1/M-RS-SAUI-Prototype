import { Component, OnInit, ViewChild, ChangeDetectorRef } from '@angular/core';
import { AdaptiveUIContainerComponent } from '../Adaptive-UI-Elements/adaptive-uicontainer/adaptive-uicontainer.component';
import { AdaptiveUIModelService } from '../adaptive-uimodel.service';
import { AdaptUiModelBase } from '../Adaptive-UI-DataModel/adapt-ui-model-base';
import { ActivatedRoute, Route, Router } from '@angular/router';
import { url } from 'inspector';

@Component({
  selector: 'app-adaptive-uicore',
  templateUrl: './adaptive-uicore.component.html',
  styleUrls: ['./adaptive-uicore.component.css']
})
export class AdaptiveUICoreComponent implements OnInit {

  @ViewChild(AdaptiveUIContainerComponent) root: AdaptiveUIContainerComponent;
  constructor(public uiDMServ: AdaptiveUIModelService, private changeDec: ChangeDetectorRef, private activateRoute: ActivatedRoute) {
  }
  ngOnInit(): void {
    this.uiDMServ.UIdataModel.subscribe(dm => this.SetUpUI(dm) );
    this.activateRoute.url.subscribe(purl => {
      if (this.uiDMServ.routingModel.value) {
        const match = this.uiDMServ.routingModel.value.routes.filter(r => r.path === purl.join('/'))[0];
        if (match) {
          this.uiDMServ.UIdataModel.next(match.model);
        }
      }
    });
  }
  public SetUpUI(uiDM: AdaptUiModelBase) {
    this.root.model = uiDM;
    this.root.model.ComponentInstace = this.root;
    this.root.children = uiDM.children;
    this.changeDec.detectChanges();
  }

}
