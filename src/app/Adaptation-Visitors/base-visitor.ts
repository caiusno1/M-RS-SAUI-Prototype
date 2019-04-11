import { Container } from '../WAML/Container';
import { Element } from '../WAML/Element';

export abstract class BaseVisitor {
  public _tags = [];
  findElements(model: Element, parent = null) {
    if (model instanceof Container){
      const container1 = <Container> model;
      if (container1.elements && model.elements.length > 0) {
        let j = 0;
        while (j < model.elements.length) {
          this.findElements(model.elements[j]);
          j++;
        }
      }
    }
    if (this._tags.length > 0) {
      let i = 0;
      while (i < this._tags.length) {
        if (model.tags) {
          if (model.tags.includes(' ' + this._tags[i])
          || model.tags.includes(this._tags[i] + ' ')
          || model.tags === this._tags[i]
          ) {
            this.foundElement(model);
          }
        }
        i++;
      }
    }
  }
  findparent(model: Element, parent = null) {
    if ( model instanceof Container) {
      const container2 = <Container> model;
      if (this._tags.length > 0 && container2.elements) {
        let i = 0;
        while (i < this._tags.length) {
          for (const child of container2.elements) {
            if (child.tags) {
              if (child.tags.includes(' ' + this._tags[i])
              || child.tags.includes(this._tags[i] + ' ')
              || child.tags === this._tags[i]
              ) {
                this.foundParent(child, model);
              }
            }
          }
          i++;
        }
      }
      if (container2.elements && container2.elements.length > 0) {
        let j = 0;
        while (j < container2.elements.length) {
          this.findparent(container2.elements[j], model);
          j++;
        }
      }
    }
  }
  abstract foundElement(_element: Element);
  abstract foundParent(_element: Element, _parent: Element);
}
