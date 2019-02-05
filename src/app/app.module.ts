import { AdaptationService } from './Adaptive-UI-Services/adaptation.service';
import { RuleEngineService } from './Adaptive-UI-Services/rule-engine.service';
import { AdaptiveUIBindingAnchorDirective } from 'src/app/Adaptive-UI-Elements/Utility/AdaptiveUIBindingAnchorDirective';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { AppComponent } from './app.component';
import { AdaptiveUIContainerComponent } from './Adaptive-UI-Elements/adaptive-uicontainer/adaptive-uicontainer.component';
import { AdaptiveUibuttonComponent } from './Adaptive-UI-Elements/adaptive-uibutton/adaptive-uibutton.component';
import { NoolsTestComponent } from './experimentation_area/nools-test/nools-test.component';
import { AdaptiveUICoreComponent } from './Adaptive-UI-Elements/Utility/adaptive-uicore/adaptive-uicore.component';
import { AdapativeUIDebugVarViewerComponent } from './debug/adapative-ui-debug-var-viewer/adapative-ui-debug-var-viewer.component';
import { AdapativeUIDebugInitializerComponent } from './debug/adapative-ui-debug-initializer/adapative-ui-debug-initializer.component';
import { AdaptiveUIHeadingComponent } from './Adaptive-UI-Elements/adaptive-uiheading/adaptive-uiheading.component';
const appRoutes: Routes = [
  { path: '**', component: AdaptiveUICoreComponent }
];
@NgModule({
  declarations: [
    AppComponent,
    AdaptiveUIContainerComponent,
    AdaptiveUIBindingAnchorDirective,
    AdaptiveUibuttonComponent,
    NoolsTestComponent,
    AdapativeUIDebugVarViewerComponent,
    AdapativeUIDebugInitializerComponent,
    AdaptiveUICoreComponent,
    AdaptiveUIHeadingComponent
  ],
  imports: [
    RouterModule.forRoot(
      appRoutes
    ),
    BrowserModule
  ],
  providers: [RuleEngineService, AdaptationService],
  bootstrap: [AppComponent],
  entryComponents: [AdaptiveUIContainerComponent, AdaptiveUibuttonComponent, AdaptiveUICoreComponent, AdaptiveUIHeadingComponent]
})
export class AppModule {

 }
