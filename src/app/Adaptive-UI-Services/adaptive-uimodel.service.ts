import { WebApp } from '../WAML/WebApp';
import {  BehaviorSubject } from 'rxjs';
import { Injectable } from '@angular/core';
import { Router} from '@angular/router';
import { WebPage } from '../WAML/WebPage';
import { RoutingModel } from '../Adaptive-UI-Routing/routing-model';

@Injectable({
  providedIn: 'root'
})
export class AdaptiveUIModelService {
  public UIdataModel: BehaviorSubject<WebPage>;
  public websiteModel: BehaviorSubject<WebApp>;
  public routing: BehaviorSubject<RoutingModel>;
  constructor(private router: Router) {
    const website = new WebApp;
    website.pages = [];
    const page = new WebPage;
    page.name = 'No model loaded';
    website.pages.push(page);
    this.websiteModel = new BehaviorSubject<WebApp>(website);
    this.UIdataModel = new BehaviorSubject<WebPage>(this.websiteModel.getValue().pages[0]);
    this.routing = new BehaviorSubject<RoutingModel>(new RoutingModel);
  }
}
