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
import { AdaptiveUIHeadingComponent } from './Adaptive-UI-Elements/adaptive-uiheading/adaptive-uiheading.component';
import { TriggEngineModule } from 'TriGGEngine/Examples/TGGExample1/projects/trigg-engine/src/public_api';
import { AdaptiveUIParagraphComponent } from './Adaptive-UI-Elements/adaptive-uiparagraph/adaptive-uiparagraph.component';
import { DebugVarControllComponent } from './debug/debug-var-controll/debug-var-controll.component';
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
    AdaptiveUICoreComponent,
    AdaptiveUIHeadingComponent,
    AdaptiveUIParagraphComponent,
    DebugVarControllComponent
  ],
  imports: [
    RouterModule.forRoot(
      appRoutes
    ),
    BrowserModule,
    TriggEngineModule
  ],
  providers: [],
  bootstrap: [AppComponent],
  entryComponents: [AdaptiveUIContainerComponent, AdaptiveUibuttonComponent,
    AdaptiveUICoreComponent, AdaptiveUIHeadingComponent, AdaptiveUIParagraphComponent]
})
export class AppModule {

 }
