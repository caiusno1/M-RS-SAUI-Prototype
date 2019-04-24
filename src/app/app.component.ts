import { PlatformContext } from './ContextML/PlatformContext';
import { ContextChangeService } from 'src/app/Adaptive-UI-Services/context-change.service';
import { Paragraph } from './WAML/Paragraph';
import { DefaultLayout } from './WAML/DefaultLayout';
import { Caption } from './WAML/Caption';
import { AdaptiveUIModelService } from './Adaptive-UI-Services/adaptive-uimodel.service';
import { Vision } from './ContextML/Vision';
import { ContextML } from './ContextML/ContextML';
import { Component } from '@angular/core';
import { TriggEngine, TriggModelService } from 'TriGGEngine/Examples/TGGExample1/projects/trigg-engine/src/public_api';
import { UserContext } from './ContextML/UserContext';
import { WebApp } from './WAML/WebApp';
import { WebPage } from './WAML/WebPage';
import { EnviromentContext } from './ContextML/EnviromentContext';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  private srcmodel_ctx: ContextML;
  constructor(private engine: TriggEngine, private modServ: TriggModelService,
    private adaptUIService: AdaptiveUIModelService, private ctxServ: ContextChangeService){
    this.srcmodel_ctx = new ContextML();
    this.srcmodel_ctx.userContext = new UserContext();
    this.srcmodel_ctx.platformContext = new PlatformContext();
    this.srcmodel_ctx.enviromentContext = new EnviromentContext();
    this.srcmodel_ctx.userContext.vision = new Vision();
    this.srcmodel_ctx.userContext.vision.value  = 0.5;
    const ruleset = [
        {
        'name': 'test1',
        'srcblackpattern': [
          [ContextML, 'ctx', 'dcl.declaredSrc[ctx]'],
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
          [WebPage, 'p', `p.name == 'The Webpage' && p.__style === '{"background-color": "green"}'`],
          [DefaultLayout, 'l', 'l', 'from p.layout'],
          [Caption, 'c', `c.level === 1 && c.drawableValue === 'Welcome'`, 'from p.elements'],
          [Paragraph, 'pa', `pa.drawableValue === 'Hallo Welt'`, 'from p.elements']
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
          [ContextML, 'ctx', '!dcl.declaredSrc[ctx]'],
          [UserContext, 'uctx', '!dcl.declaredSrc[uctx]', 'from ctx.userContext']
        ],
        'trggreenpattern': [
          [WebApp, 'w', `w.title == 'Adapt UI Mars'  &&!dcl.declaredSrc[w]`]
        ]
      },
      {
        'name': 'test3',
        'srcblackpattern': [
          [ContextML, 'ctx', 'dcl.declaredSrc[ctx]'],
          [UserContext, 'uctx', 'dcl.declaredSrc[uctx]', 'from ctx.userContext']
        ],
        'srcbrighingEdges': [{
          'node1': 'uctx',
          'node2': 'v',
          'edgeName': 'vision'
        }],
        'srcgreenpattern': [
          [Vision, 'v', 'v.value === 0 && !dcl.declaredSrc[v]']
        ],
        'trgblackpattern': [
          [WebApp, 'w', 'w']
        ],
        'trggreenpattern': [
          [WebPage, 'p', `p.name == 'The Webpage' && p.__style === '{"background-color": "green"}'`],
          [DefaultLayout, 'l', 'l', 'from p.layout'],
          [Caption, 'c', `c.level === 1 && c.drawableValue === 'Welcome'`, 'from p.elements'],
          [Paragraph, 'pa', `pa.drawableValue === 'Got it'`, 'from p.elements']
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
    ];
    ctxServ.CTXObserver.subscribe((ctx) => modServ.pushSrcModel(ctx));
    ctxServ.CTXObserver.next(this.srcmodel_ctx);
    engine.init(ruleset, modServ);
    engine.modelServ.registerForAfterSync(() => {
      const trgModel = <WebApp>modServ.getTrgModel();
      if (trgModel){
        adaptUIService.websiteModel.next(<WebApp>modServ.getTrgModel());
        if (trgModel.pages && trgModel.pages[0]){
          adaptUIService.UIdataModel.next(<any>(<WebApp>modServ.getTrgModel()).pages[0]);
        }
      }
    });
  }
  onClick(){
    this.ctxServ.setAndSubmit((ctx: ContextML) =>
    {
      ctx.userContext.vision = new Vision();
      ctx.userContext.vision.value = 0.5;
      return ctx;
    }
    );
  }
}
