import { Element } from '../AngularDSL/Element';

export interface Visitor {
  visit(model: Element, parent: Element);
}
