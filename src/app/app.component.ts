import { CustomContextProperty } from './ContextML/CustomContextProperty';
import { Activity } from './ContextML/Activity';
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
import { ENGINE_METHOD_ALL } from 'constants';
import { NoiseLevel } from './ContextML/NoiseLevel';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  private srcmodel_ctx: ContextML;
  public ruleset: TGGRule[];
  private added: boolean;
  constructor(private engine: TriggEngine, private modServ: TriggModelService,
    private adaptUIService: AdaptiveUIModelService, private ctxServ: ContextChangeService){
    this.srcmodel_ctx = new ContextML();
    this.srcmodel_ctx.userContext = new UserContext();
    this.srcmodel_ctx.platformContext = new PlatformContext();
    this.srcmodel_ctx.enviromentContext = new EnviromentContext();
    this.ruleset = [
      {
        'name': 'init',
        'temperature': TemperatureEnum.INIT,
        'srcgreenpattern': [
          [ContextML, 'ctx', '!dcl.declaredSrc.get(ctx)'],
          [UserContext, 'uctx', '!dcl.declaredSrc.get(uctx)', 'from ctx.userContext'],
          [PlatformContext, 'pctx', '!dcl.declaredSrc.get(pctx)', 'from ctx.platformContext'],
          [EnviromentContext, 'ectx', '!dcl.declaredSrc.get(ectx)', 'from ctx.enviromentContext']
        ],
        'trggreenpattern': [
          [WebApp, 'w', `w.title == 'Adapt UI Mars' && w.Modality === 0 && !dcl.declaredTrg.get(w)`],
          [WebPage, 'p', `p.name == 'The Webpage' && p.__style === '{"background": "lightblue", "height":"100vh"}' && !dcl.declaredTrg.get(p)`, 'from w.pages'],
          [DefaultLayout, 'l', '!dcl.declaredTrg.get(l)', 'from p.layout'],
          [Caption, 'c', `c.level === 1 && c.drawableValue === 'Infotainment Example' && !dcl.declaredTrg.get(c)`, 'from p.elements'],
          [Container, 'cont', `!dcl.declaredTrg.get(l) && cont.__style == '{"float":"left"}'`, 'from p.elements'],
          [ListLayout, 'contL', `!dcl.declaredTrg.get(contL)`, 'from cont.layout'],
          [Input, 'homeBtn', `homeBtn.inputType=='button' && homeBtn.drawableValue=='Home' && homeBtn.__style == '{"margin-bottom":"10px"}'`, 'from cont.elements'],
          [Input, 'radioBtn', `radioBtn.inputType=='button' && radioBtn.drawableValue=='Radio' && radioBtn.__style == '{"margin-bottom":"10px"}'`, 'from cont.elements'],
          [Input, 'navBtn', `navBtn.inputType=='button' && navBtn.drawableValue=='Nav' && navBtn.__style == '{"margin-bottom":"10px"}'`, 'from cont.elements'],
          [Container, 'contR', `!dcl.declaredTrg.get(contR) && contR.__style == '{"float":"right", "margin-right":"65px"}'`, 'from p.elements'],
          [ListLayout, 'contRL', `!dcl.declaredTrg.get(contRL)`, 'from contR.layout'],
          [Input, 'backBtn', `backBtn.inputType=='button' && backBtn.drawableValue=='Back' && backBtn.__style == '{"margin-bottom":"10px","margin":"0 0 10px 0" }'`, 'from contR.elements'],
          [Input, 'settingsBtn', `settingsBtn.inputType=='button' && settingsBtn.drawableValue=='Settings' && settingsBtn.__style == '{"margin-bottom":"10px","margin":"0 0 10px 0" }'`, 'from contR.elements'],
          [Input, 'louderBtn', `louderBtn.inputType=='button' && louderBtn.drawableValue=='Turn volume up' && louderBtn.__style == '{"margin-bottom":"10px","margin":"0 0 10px 0" }'`, 'from contR.elements'],
          [Input, 'morequietBtn', `morequietBtn.inputType=='button' && morequietBtn.drawableValue=='Turn volume down' && morequietBtn.__style == '{"margin-bottom":"10px","margin":"0 0 10px 0" }'`, 'from contR.elements']
        ],
        corr: [{refsrc: 'ctx', reftrg: 'w'}]
      },
      {
        'name': 'nightMode',
        'temperature': TemperatureEnum.COLD,
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
      },
      {
        'name': 'nightMode2',
        'temperature': TemperatureEnum.COLD,
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
          [WebApp, 'p', `dcl.declaredTrg.get(p)`],
        ],
        'trgyellowpattern': [
          [WebApp, 'p', `dcl.declaredTrg.get(p) && p.Modality === 1'`],
        ]
      },
      {
        'name': 'visionMode',
        'temperature': TemperatureEnum.HOT,
        'srcblackpattern': [
          [UserContext, 'uctx', 'dcl.declaredSrc.get(uctx)']
        ],
        'srcgreenpattern': [
          [Vision, 'vision', '!dcl.declaredSrc.get(vision) && vision.value<50'],
        ],
        'srcbrighingEdges': [
          {'node1': 'uctx', 'node2': 'vision', 'edgeName': 'vision'}
        ],
        'trgblackpattern': [
          [WebPage, 'p', `dcl.declaredTrg.get(p)`],
        ],
        'trgyellowpattern': [
          [WebPage, 'p', `dcl.declaredTrg.get(p) && p.__style=='{"background":"white", "color":"black"}'`],
        ]
      },
      {
        'name': 'activityMode',
        'temperature': TemperatureEnum.COLD,
        'srcblackpattern': [
          [EnviromentContext, 'ectx', 'dcl.declaredSrc.get(ectx)']
        ],
        'srcgreenpattern': [
          [Activity, 'activity', '!dcl.declaredSrc.get(activity) && activity.value>1'],
        ],
        'srcbrighingEdges': [
          {'node1': 'ectx', 'node2': 'activity', 'edgeName': 'activity'}
        ],
        'trgblackpattern': [
          [WebApp, 'p', `dcl.declaredTrg.get(p)`],
        ],
        'trgyellowpattern': [
          [WebApp, 'p', `dcl.declaredTrg.get(p) &&  p.Modality === 1`],
        ]
      },
      {
        'name': 'noiseLevelMode',
        'temperature': TemperatureEnum.HOT,
        'srcblackpattern': [
          [EnviromentContext, 'ectx', 'dcl.declaredSrc.get(ectx)']
        ],
        'srcgreenpattern': [
          [NoiseLevel, 'noiseLevel', '!dcl.declaredSrc.get(noiseLevel) && noiseLevel.value>50'],
        ],
        'srcbrighingEdges': [
          {'node1': 'ectx', 'node2': 'noiseLevel', 'edgeName': 'noiseLevel'}
        ],
        'trgblackpattern': [
          [WebApp, 'p', `dcl.declaredTrg.get(p)`],
        ],
        'trgyellowpattern': [
          [WebApp, 'p', `dcl.declaredTrg.get(p) &&  p.Modality === 0`],
        ]
      },
      {
        'name': 'TrafficStateJam',
        'temperature': TemperatureEnum.HOT,
        'srcblackpattern': [
          [ContextML, 'ctx', 'dcl.declaredSrc.get(ctx)']
        ],
        'srcgreenpattern': [
          [CustomContextProperty, 'custom', '!dcl.declaredSrc.get(custom) && custom.name === "Traffic State" && custom.value === 1'],
        ],
        'srcbrighingEdges': [
          {'node1': 'ctx', 'node2': 'custom', 'edgeName': 'customcontextproperty'}
        ],
        'trgblackpattern': [
          [WebApp, 'p', `dcl.declaredTrg.get(p)`],
        ],
        'trgyellowpattern': [
          [WebApp, 'p', `dcl.declaredTrg.get(p) &&  p.Modality === 1`],
        ]
      }
    ];
    ctxServ.CTXObserver.subscribe((ctx) => modServ.pushSrcModel(ctx));
    ctxServ.CTXObserver.next(this.srcmodel_ctx);
    engine.init(this.ruleset, modServ);
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
    window.setTimeout(() => ctxServ.setAndSubmit((ctx) => ctx), 100);
  }
  public addRuleTest(){
    if (!this.added){
      const tggRule: TGGRule = {
        'name': 'addRuleTest',
        'temperature': TemperatureEnum.HOT,
          'srcblackpattern': [
            [UserContext, 'uctx', 'dcl.declaredSrc.get(uctx)']
          ],
          'srcgreenpattern': [
            [Vision, 'vision', '!dcl.declaredSrc.get(vision) && vision.value<50'],
          ],
          'srcbrighingEdges': [
            {'node1': 'uctx', 'node2': 'vision', 'edgeName': 'vision'}
          ],
          'trgblackpattern': [
            [WebPage, 'p', `dcl.declaredTrg.get(p)`],
          ],
          'trgyellowpattern': [
            [WebPage, 'p', `dcl.declaredTrg.get(p) && p.__style=='{"border":"1px solid green", "color":"black"}'`],
        ]};
      this.engine.addRule(tggRule);
      this.added = true;
      }
  }
}
