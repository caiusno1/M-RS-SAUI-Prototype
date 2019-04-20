import { Component, OnInit } from '@angular/core';
import { Paragraph } from 'src/app/WAML/Paragraph';

@Component({
  selector: 'app-adaptive-uiparagraph',
  templateUrl: './adaptive-uiparagraph.component.html',
  styleUrls: ['./adaptive-uiparagraph.component.css']
})
export class AdaptiveUIParagraphComponent implements OnInit {
  public model: Paragraph;
  constructor() { }

  ngOnInit() {
  }

}
