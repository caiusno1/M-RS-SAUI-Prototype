import { Website } from '../AngularDSL/Website';
import {  BehaviorSubject } from 'rxjs';
import { Injectable } from '@angular/core';
import { Router} from '@angular/router';
import { Page } from '../AngularDSL/Page';
import { RoutingModel } from '../Adaptive-UI-Routing/routing-model';

@Injectable({
  providedIn: 'root'
})
export class AdaptiveUIModelService {
  public UIdataModel: BehaviorSubject<Page>;
  public websiteModel: BehaviorSubject<Website>;
  public routing: BehaviorSubject<RoutingModel>;
  constructor(private router: Router) {
    const website = new Website;
    website.pages = [];
    const page = new Page;
    page.name = 'No model loaded';
    website.pages.push(page);
    this.websiteModel = new BehaviorSubject<Website>(website);
    this.UIdataModel = new BehaviorSubject<Page>(this.websiteModel.getValue().pages[0]);
    this.routing = new BehaviorSubject<RoutingModel>(new RoutingModel);
  }
}
