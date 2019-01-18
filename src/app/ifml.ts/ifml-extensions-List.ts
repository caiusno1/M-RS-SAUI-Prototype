
/** Generated Code
* emf ecore to TypeScript
* (C) XSLT ecore2ts - Kai Biermeier
**/
import { ViewComponent } from './ifml-core-ViewComponent';
import { SelectEvent } from './ifml-extensions-SelectEvent';
import { SubmitEvent } from './ifml-extensions-SubmitEvent';

export class List extends ViewComponent {
  constructor() {
  super();
  }
  public eClass: string;
  public $ref: string;
  
  // Type: #/ifml/extensions/SelectEvent
  public selectEvent: SelectEvent[];

  // Type: #/ifml/extensions/SubmitEvent
  public submitEvent: SubmitEvent[];

}
    