import { Element } from '../WAML/Element';

export interface Visitor {
  visit(model: Element, parent: Element);
}
