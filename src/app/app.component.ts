import { Time } from './ContextML/Time';
import { Container } from './WAML/Container';
import { ListLayout } from './WAML/ListLayout';
import { Input } from './WAML/Input';
import { TGGRule } from './../../TriGGEngine/Examples/TGGExample1/projects/trigg-engine/src/lib/TGGModels/TGGRule';
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
import { TemperatureEnum } from 'TriGGEngine/Examples/TGGExample1/projects/trigg-engine/src/lib/TGGModels/TemperatureEnum';
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
    const ruleset: TGGRule[] = [
      {
        'name': 'init',
        'temperature': TemperatureEnum.COLD,
        'srcgreenpattern': [
          [ContextML, 'ctx', '!dcl.declaredSrc.get(ctx)'],
          [UserContext, 'uctx', '!dcl.declaredSrc.get(uctx)', 'from ctx.userContext'],
          [PlatformContext, 'pctx', '!dcl.declaredSrc.get(pctx)', 'from ctx.platformContext'],
          [EnviromentContext, 'ectx', '!dcl.declaredSrc.get(ectx)', 'from ctx.enviromentContext']
        ],
        'trggreenpattern': [
          [WebApp, 'w', `w.title == 'Adapt UI Mars' && w.Modality === 1 && !dcl.declaredTrg.get(w)`],
          [WebPage, 'p', `p.name == 'The Webpage' && p.__style === '{"background": "lightblue", "height":"100vh"}' && !dcl.declaredTrg.get(p)`, 'from w.pages'],
          [DefaultLayout, 'l', '!dcl.declaredTrg.get(l)', 'from p.layout'],
          [Caption, 'c', `c.level === 1 && c.drawableValue === 'Infotainment Example' && !dcl.declaredTrg.get(c)`, 'from p.elements'],
          [Container, 'cont', `!dcl.declaredTrg.get(l) && cont.__style == '{"float":"left"}'`, 'from p.elements'],
          [ListLayout, 'contL', `!dcl.declaredTrg.get(contL)`, 'from cont.layout'],
          [Input, 'homeBtn', `homeBtn.inputType=='button' && homeBtn.drawableValue=='Home' && homeBtn.__style == '{"margin-bottom":"20px"}'`, 'from cont.elements'],
          [Input, 'radioBtn', `radioBtn.inputType=='button' && radioBtn.drawableValue=='Radio' && radioBtn.__style == '{"margin-bottom":"20px"}'`, 'from cont.elements'],
          [Input, 'navBtn', `navBtn.inputType=='button' && navBtn.drawableValue=='Nav' && navBtn.__style == '{"margin-bottom":"20px"}'`, 'from cont.elements'],
          [Container, 'contR', `!dcl.declaredTrg.get(contR) && contR.__style == '{"float":"right"}'`, 'from p.elements'],
          [ListLayout, 'contRL', `!dcl.declaredTrg.get(contRL)`, 'from contR.layout'],
          [Input, 'backBtn', `backBtn.inputType=='button' && backBtn.drawableValue=='Back' && backBtn.__style == '{"margin-bottom":"20px"}'`, 'from contR.elements']
        ]
      },
      {
        'name': 'nightMode',
        'temperature': TemperatureEnum.HOT,
        'srcblackpattern': [
          [EnviromentContext, 'ectx', 'dcl.declaredSrc.get(ectx)']
        ],
        'srcgreenpattern': [
          [Time, 'time', '!dcl.declaredSrc.get(time) && time.value>20 || time.value<8'],
        ],
        'srcbrighingEdges':[
          {'node1': 'ectx', 'node2': 'time', 'edgeName': 'time'}
        ],
        'trgblackpattern': [
          [WebPage, 'p', `dcl.declaredTrg.get(p)`],
        ],
        'trgyellowpattern': [
          [WebPage, 'p', `dcl.declaredTrg.get(p) && p.__style=='{"background":"black", "color":"white"}'`],
        ]
      }
    ];
    ctxServ.CTXObserver.subscribe((ctx) => modServ.pushSrcModel(ctx));
    ctxServ.CTXObserver.next(this.srcmodel_ctx);
    engine.init(ruleset, modServ);
    engine.modelServ.registerForAfterSync(() => {
      const trgModel = <WebApp>modServ.getTrgModel();
      console.log((<any>engine).trg);
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
