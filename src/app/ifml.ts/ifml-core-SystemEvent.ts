
/** Generated Code
* emf ecore to TypeScript
* (C) XSLT ecore2ts - Kai Biermeier
**/
import { Event } from './ifml-core-Event';
import { Expression } from './ifml-core-Expression';
import { SystemEventTypeEnum } from './ifml-core-SystemEventTypeEnum';

export class SystemEvent extends Event {
  constructor() {
  super();
  }
  public eClass: string;
  public $ref: string;
  
  // Type: #/ifml/core/Expression
  public triggeringExpressions: Expression[];

  // Type: #/ifml/core/SystemEventTypeEnum
  public type: SystemEventTypeEnum;

}
    