import { AdaptiveUIModelService } from 'src/app/Adaptive-UI-Services/adaptive-uimodel.service';
import { Injectable } from '@angular/core';
export enum Modality{
  textual, vocal
}
@Injectable({
  providedIn: 'root'
})
export class AlertServiceService {
  constructor(private uiserv: AdaptiveUIModelService) {

  }
  sayAlert(){
    if (this.uiserv.websiteModel.value.Modality == Modality.vocal)
    {
      var synth = window.speechSynthesis;
      var utterThis = new SpeechSynthesisUtterance('Alert');
      synth.speak(utterThis);
    }
    else {
      alert('Alarm');
    }
  }
}
