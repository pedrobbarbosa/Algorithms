import {Heap} from "./heap";

class maxHeap extends Heap {
  constructor(public nodes: number[]) {
    super(nodes);
    this.majorNodeProperty();
  }

  public majorNodeProperty() {
    for (let index = Math.floor((this.nodes.length / 2) - 1); index >= 0; index--) {
      this.maxHeapify(this.nodes, index);
    }
  }
  
  public permutation(index: number, indexB: number): void {
    const tmp = this.nodes[index]
    this.nodes[index] = this.nodes[indexB]
    this.nodes[indexB] = tmp;
  }

  public maxHeapify(Array: number[], index: number): void {
    let largest: number = 0;

    if (this.getLeftAdjacentIndex(index) <= Array.length && 
        Array[this.getLeftAdjacentIndex(index)] > Array[index]) {
          largest = this.getLeftAdjacentIndex(index)
        } else {
          largest = index
        }

    if (this.getRightAdjacentIndex(index) <= Array.length &&
        Array[this.getRightAdjacentIndex(index)] > Array[largest]) {
          largest = this.getRightAdjacentIndex(index);
        }
    
    if (largest != index) {
      this.permutation(index, largest);
      this.maxHeapify(Array, largest);
    }

  }

  public heapSort(): void {
    const array: any[] = [];

    for (let i = this.nodes.length - 1; i >= 0; i--) {
      this.permutation(i, 0);
      array.unshift(this.nodes.pop());
      this.majorNodeProperty();
    }
    this.nodes = [...array];
  }
}

export {maxHeap};