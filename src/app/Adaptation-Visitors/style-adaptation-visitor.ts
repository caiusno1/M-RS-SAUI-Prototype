import { Element } from '../AngularDSL/Element';
import { BaseVisitor } from './base-visitor';
export class StyleAdaptationVisitor extends BaseVisitor {
  public _tags: string[];
  public _style: any;
  visit(model: Element, parent = null) {
    this.findElements(model);
  }
  foundElement(_element: Element) {
    _element.style = this._style;
  }
  foundParent(_element: Element, _parent: Element) {
    throw new Error('Method not implemented.');
  }

}
