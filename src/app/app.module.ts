import { AdaptiveUIBindingAnchorDirective } from 'src/app/AdaptiveUIBindingAnchorDirective';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { AdaptiveUIContainerComponent } from './Adaptive-UI-Elements/adaptive-uicontainer/adaptive-uicontainer.component';

@NgModule({
  declarations: [
    AppComponent,
    AdaptiveUIContainerComponent,
    AdaptiveUIBindingAnchorDirective
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent],
  entryComponents: [AdaptiveUIContainerComponent]
})
export class AppModule { }
