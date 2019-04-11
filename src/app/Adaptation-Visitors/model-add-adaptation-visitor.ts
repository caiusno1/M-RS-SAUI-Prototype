import { BaseVisitor } from './base-visitor';
import { Element } from '../WAML/Element';
import { Container } from '../WAML/Container';
export class ModelAddAdaptationVisitor extends BaseVisitor {
  public addModel: Element;
  public _tags: string[];
  visit(model: Element, parent = null) {
    this.findElements(model);
  }
  foundElement(model: Element) {
    if (model instanceof Container){
      model.elements.push(this.addModel);
    }
  }
  foundParent(_element: Element, _parent: Element) {}
}
