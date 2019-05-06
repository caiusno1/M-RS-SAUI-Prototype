import { ContextML } from './../../ContextML/ContextML';
import { ContextChangeService } from 'src/app/Adaptive-UI-Services/context-change.service';
import { Component, OnInit } from '@angular/core';
import { Time } from 'src/app/ContextML/Time';

@Component({
  selector: 'app-debug-var-controll',
  templateUrl: './debug-var-controll.component.html',
  styleUrls: ['./debug-var-controll.component.css']
})
export class DebugVarControllComponent implements OnInit {

  constructor(private ctxSrv: ContextChangeService) { }
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

}
