import {Heap} from "./heap";

class maxHeap extends Heap {
  constructor(public nodes: number[]) {
    super(nodes);
    this.majorNodeProperty();
  }

  public majorNodeProperty() {
    for (let index = (this.nodes.length / 2) - 1; index >= 0; index--) {
      this.maxHeapify(this.nodes, index);
    }
  }

  public maxHeapify(Array: number[], index: number): void {
  }
}

export {maxHeap};