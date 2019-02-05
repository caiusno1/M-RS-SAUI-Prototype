import { Container } from '../AngularDSL/Container';
import { Element } from '../AngularDSL/Element';
import { BaseVisitor } from './base-visitor';
export class ModelRemoveAdaptationVisitor extends BaseVisitor {
  visit(model: Element, parent: Element) {
    this.findparent(model, parent);
  }
  foundElement(_element: Element) {}
  foundParent(_element: Element, _parent: Element) {
    if (_parent instanceof Container){
      _parent.elements.splice( _parent.elements.indexOf(_element), 1 );
    }
  }
}
