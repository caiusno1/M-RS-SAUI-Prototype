import { WebApp } from './../../../WAML/WebApp';
import { AdaptiveUIModelService } from 'src/app/Adaptive-UI-Services/adaptive-uimodel.service';
import { Component, ViewChild, ChangeDetectorRef, OnInit } from '@angular/core';
import { AdaptiveUIContainerComponent } from '../../adaptive-uicontainer/adaptive-uicontainer.component';
import { WebPage } from 'src/app/WAML/WebPage';
import { ActivatedRoute } from '@angular/router';
//
@Component({
  selector: 'app-adaptive-uicore',
  templateUrl: './adaptive-uicore.component.html',
  styleUrls: ['./adaptive-uicore.component.css']
})
export class AdaptiveUICoreComponent implements OnInit {
  private model: WebApp;
  @ViewChild(AdaptiveUIContainerComponent) root: AdaptiveUIContainerComponent;
  constructor(public uiDMServ: AdaptiveUIModelService, private changeDec: ChangeDetectorRef, private activateRoute: ActivatedRoute) {
  }
  ngOnInit(): void {
    this.uiDMServ.websiteModel.subscribe((model) => document.title = model.title);
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
  public SetUpUI(uiDM: WebPage) {
    this.root.model = uiDM;
    (<any>this.root.model).ComponentInstace = this.root;
    this.changeDec.detectChanges();
  }

}
