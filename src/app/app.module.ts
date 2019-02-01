import { AdaptationService } from './adaptation.service';
import { RuleEngineService } from './rule-engine.service';
import { AdaptiveUIBindingAnchorDirective } from 'src/app/AdaptiveUIBindingAnchorDirective';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { AdaptiveUIContainerComponent } from './Adaptive-UI-Elements/adaptive-uicontainer/adaptive-uicontainer.component';
import { AdaptiveUibuttonComponent } from './Adaptive-UI-Elements/adaptive-uibutton/adaptive-uibutton.component';
import { NoolsTestComponent } from './experimentation_area/nools-test/nools-test.component';
import { AdapativeUIDebugVarViewerComponent } from './adapative-ui-debug-var-viewer/adapative-ui-debug-var-viewer.component';
import { AdapativeUIDebugInitializerComponent } from './adapative-ui-debug-initializer/adapative-ui-debug-initializer.component';
@NgModule({
  declarations: [
    AppComponent,
    AdaptiveUIContainerComponent,
    AdaptiveUIBindingAnchorDirective,
    AdaptiveUibuttonComponent,
    NoolsTestComponent,
    AdapativeUIDebugVarViewerComponent,
    AdapativeUIDebugInitializerComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [RuleEngineService, AdaptationService],
  bootstrap: [AppComponent],
  entryComponents: [AdaptiveUIContainerComponent, AdaptiveUibuttonComponent]
})
export class AppModule { }
