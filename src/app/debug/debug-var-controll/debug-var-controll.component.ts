import { CustomContextProperty } from './../../ContextML/CustomContextProperty';
import { ActivityEnum } from './../../ContextML/ActivityEnum';
import { TriggEngine } from 'TriGGEngine/Examples/TGGExample1/projects/trigg-engine/src/public_api';
import { AlertServiceService } from './../../alert-service.service';
import { ContextML } from './../../ContextML/ContextML';
import { ContextChangeService } from 'src/app/Adaptive-UI-Services/context-change.service';
import { Component, OnInit } from '@angular/core';
import { Time } from 'src/app/ContextML/Time';
import { Input } from 'src/app/WAML/Input';
import { TGGRule } from 'TriGGEngine/Examples/TGGExample1/projects/trigg-engine/src/lib/TGGModels/TGGRule';
import { Vision } from 'src/app/ContextML/Vision';
import { Activity } from 'src/app/ContextML/Activity';
import { NoiseLevel } from 'src/app/ContextML/NoiseLevel';
import { CustomContextPropertyDatatype } from 'src/app/ContextML/CustomContextPropertyDatatype';
enum TrafficState{
  DEFAULT, ON_JAM
}
@Component({
  selector: 'app-debug-var-controll',
  templateUrl: './debug-var-controll.component.html',
  styleUrls: ['./debug-var-controll.component.css']
})
export class DebugVarControllComponent implements OnInit {

  constructor(private ctxSrv: ContextChangeService, private alertSrv: AlertServiceService) { }
  private enabled = true;
  ngOnInit() {
  }
  public setNight(){
      this.ctxSrv.setAndSubmit((ctx: ContextML) => {
        if(this.enabled){
          ctx.enviromentContext.time = new Time();
          ctx.enviromentContext.time.value = '24';
          this.enabled = false;
        } else {
          ctx.enviromentContext.time = new Time();
          ctx.enviromentContext.time.value = '12';
          this.enabled = true;
        }
        return ctx;
      });
  }
  public alertTest(){
    setTimeout(() => { this.alertSrv.sayAlert(); }, 4000);
  }
  public toogleVisionGoodBad(){
    if (this.ctxSrv.ctx.userContext.vision) {
      this.ctxSrv.setAndSubmit((ctx: ContextML) => {
        if (ctx.userContext.vision.value <= 50){
          ctx.userContext.vision.value = 100;
        } else {
          ctx.userContext.vision.value = 0;
        }
        return ctx;
      });
    } else{
      this.ctxSrv.setAndSubmit((ctx: ContextML) => {
        ctx.userContext.vision = new Vision();
        ctx.userContext.vision.value = 0;
        return ctx;
      });
    }
  }
  public toogleActivity(){
    if (this.ctxSrv.ctx.enviromentContext.activity) {
      this.ctxSrv.setAndSubmit((ctx: ContextML) => {
        if (ctx.enviromentContext.activity.value <= ActivityEnum.ON_FOOT){
          ctx.enviromentContext.activity.value = ActivityEnum.IN_VEHICLE;
        } else {
          ctx.enviromentContext.activity.value = ActivityEnum.STANDSTILL;
        }
        return ctx;
      });
    } else{
      this.ctxSrv.setAndSubmit((ctx: ContextML) => {
        ctx.enviromentContext.activity = new Activity();
        ctx.enviromentContext.activity.value = ActivityEnum.IN_VEHICLE;
        return ctx;
      });
    }
  }
  public toogleNoiseLevel(){
    if (this.ctxSrv.ctx.enviromentContext.noiseLevel) {
      this.ctxSrv.setAndSubmit((ctx: ContextML) => {
        if (ctx.enviromentContext.noiseLevel.value <= 50){
          ctx.enviromentContext.noiseLevel.value = 100;
        } else {
          ctx.enviromentContext.noiseLevel.value = 0;
        }
        return ctx;
      });
    } else{
      this.ctxSrv.setAndSubmit((ctx: ContextML) => {
        ctx.enviromentContext.noiseLevel = new NoiseLevel();
        ctx.enviromentContext.noiseLevel.value = 0;
        return ctx;
      });
    }
  }
  public toogleTrafficState(){
    if (this.ctxSrv.ctx.customcontextproperty
      && this.ctxSrv.ctx.customcontextproperty.filter(customCtxProp => customCtxProp.name === 'Traffic State').length > 0) {
      this.ctxSrv.setAndSubmit((ctx: ContextML) => {
        for (const customCtxProp of ctx.customcontextproperty){
          if (customCtxProp.name === 'Traffic State'){
            if (customCtxProp.value === TrafficState.DEFAULT){
              customCtxProp.value = TrafficState.ON_JAM;
            } else {
              customCtxProp.value = TrafficState.DEFAULT;
            }
          }
        }
        return ctx;
      });
    } else{
      this.ctxSrv.setAndSubmit((ctx: ContextML) => {
        const customContextProperty = new CustomContextProperty();
        if (!ctx.customcontextproperty){
          ctx.customcontextproperty = [customContextProperty];
        } else{
          ctx.customcontextproperty.push(customContextProperty);
        }
        customContextProperty.name = 'Traffic State';
        customContextProperty.datatype = new CustomContextPropertyDatatype();
        customContextProperty.value = TrafficState.ON_JAM;
        return ctx;
      });
    }
  }

}
