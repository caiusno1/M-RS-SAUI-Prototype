
/** Generated Code
* emf ecore to javascript
* generated at 2019-04-11T18:12:40.252+02:00
* (C) XSLT ecore2ts - Kai Biermeier
**/
import { EString } from './EString';
import { WebPage } from './WebPage';
import { EBoolean } from './EBoolean';

export class WebApp{
  public type = 'WebApp';
  public eClass: string;
  public $ref: string;
  
  // Type: ecore:EDataType http://www.eclipse.org/emf/2002/Ecore#//EString
  public title: EString;

  // Type: #//WebPage
  public pages: WebPage[];

  // Type: #//WebPage
  public startpage: WebPage;

  // Type: ecore:EDataType http://www.eclipse.org/emf/2002/Ecore#//EBoolean
  public progressive: EBoolean;

}
    