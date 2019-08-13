import { AdaptationVizService } from './../AdaptationViz/adaptation-viz.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-adapt-viz',
  templateUrl: './adapt-viz.component.html',
  styleUrls: ['./adapt-viz.component.css']
})
export class AdaptVizComponent implements OnInit {

  constructor(public adaptViz: AdaptationVizService) { }

  ngOnInit() {
  }

}
