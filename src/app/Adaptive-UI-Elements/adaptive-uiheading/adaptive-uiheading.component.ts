import { Caption } from './../../WAML/Caption';
import { AdaptiveUielementbase } from './../adaptive-uielementbase';
import { Component, OnInit } from '@angular/core';
//
@Component({
  selector: 'app-adaptive-uiheading',
  templateUrl: './adaptive-uiheading.component.html',
  styleUrls: ['./adaptive-uiheading.component.css']
})
export class AdaptiveUIHeadingComponent extends AdaptiveUielementbase {
  model: Caption;

}
