import { DomSanitizer } from '@angular/platform-browser';
import { AdaptiveUielementbase } from './../adaptive-uielementbase';
import { Component} from '@angular/core';


@Component({
  selector: 'app-adaptive-uibutton',
  templateUrl: './adaptive-uibutton.component.html',
  styleUrls: ['./adaptive-uibutton.component.css']
})
export class AdaptiveUibuttonComponent extends AdaptiveUielementbase {
  constructor(sanitizer: DomSanitizer) {
    super();
  }
  public isBlueVar: boolean;

}
