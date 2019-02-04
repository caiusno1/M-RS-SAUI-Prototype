import { element } from 'protractor';
import { Element } from './../AngularDSL/Element';
import { Component, OnInit, ViewChild, ChangeDetectorRef } from '@angular/core';
import { AdaptiveUIContainerComponent } from '../Adaptive-UI-Elements/adaptive-uicontainer/adaptive-uicontainer.component';
import { AdaptiveUIModelService } from '../adaptive-uimodel.service';
import { ActivatedRoute} from '@angular/router';
import { Page } from '../AngularDSL/Page';

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
      if (this.uiDMServ.routing.value) {
        const match = this.uiDMServ.routing.value.routes.filter(r => r.path === purl.join('/'))[0];
        if (match) {
          this.uiDMServ.UIdataModel.next(match.model);
        }
      }
    });
  }
  public SetUpUI(uiDM: Element) {
    this.root.model = <Page>uiDM;
    (<any>this.root.model).ComponentInstace = this.root;
    this.changeDec.detectChanges();
  }

}
