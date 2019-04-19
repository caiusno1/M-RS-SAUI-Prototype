import { AdaptiveUIModelService } from './Adaptive-UI-Services/adaptive-uimodel.service';
import { Vision } from './ContextModell/Vision';
import { ContextModelContainer } from './ContextModell/ContextModelContainer';
import { Component } from '@angular/core';
import { TriggEngine, TriggModelService } from 'TriGGEngine/Examples/TGGExample1/projects/trigg-engine/src/public_api';
import { UserContext } from './ContextModell/user-context';
import { WebApp } from './WAML/WebApp';
import { WebPage } from './WAML/WebPage';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  private srcmodel_ctx: ContextModelContainer;
  constructor(private engine: TriggEngine, private modServ: TriggModelService, private adaptUIService: AdaptiveUIModelService){
    this.srcmodel_ctx = new ContextModelContainer();
    this.srcmodel_ctx.userContext = new UserContext();
    this.srcmodel_ctx.userContext.vision = new Vision();
    this.srcmodel_ctx.userContext.vision.value = 0.5;
    const ruleset = [
        {
        'name': 'test1',
        'srcblackpattern': [
          [ContextModelContainer, 'ctx', 'dcl.declaredSrc[ctx]'],
          [UserContext, 'uctx', 'dcl.declaredSrc[uctx]', 'from ctx.userContext']
        ],
        'srcbrighingEdges': [{
          'node1': 'uctx',
          'node2': 'v',
          'edgeName': 'vision'
        }],
        'srcgreenpattern': [
          [Vision, 'v', 'v.value>0 && !dcl.declaredSrc[v]']
        ],
        'trgblackpattern': [
          [WebApp, 'w', 'w']
        ],
        'trggreenpattern': [
          [WebPage, 'p', `p.name == 'The Webpage' && p.__style === '{"background-color": "green"}'`]
        ],
        'trgbrighingEdges': [{
          'node1': 'w',
          'node2': 'p',
          'edgeName': 'pages'
        }],
        'corr': [
          {'refsrc': 'v', 'reftrg': 'p'}
        ]
      },
      {
        'name': 'test2',
        'srcgreenpattern': [
          [ContextModelContainer, 'ctx', '!dcl.declaredSrc[ctx]'],
          [UserContext, 'uctx', '!dcl.declaredSrc[uctx]', 'from ctx.userContext']
        ],
        'trggreenpattern': [
          [WebApp, 'w', `w.title == 'testWebsite'  &&!dcl.declaredSrc[w]`]
        ]
      }
    ];
    modServ.pushSrcModel(this.srcmodel_ctx);
    modServ.pushTrgModel(null);
    engine.init(ruleset, modServ);
    engine.modelServ.registerForAfterSync(() => {
      const trgModel = <WebApp>modServ.getTrgModel();
      console.log(trgModel);
      if (trgModel){
        adaptUIService.websiteModel.next(<WebApp>modServ.getTrgModel());
        if (trgModel.pages && trgModel.pages[0]){
          adaptUIService.UIdataModel.next(<any>(<WebApp>modServ.getTrgModel()).pages[0]);
        }
      }
    });
  }
}
