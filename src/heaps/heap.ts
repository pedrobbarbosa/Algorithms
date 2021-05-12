 class Heap {
   constructor(public nodes: number[]) {}
     public getLeftAdjacentIndex(index: number) {return index * 2 + 1}
     public getRightAdjacentIndex(index: number) {return (index * 2 + 2)}
     public getFatherIndex(index: number): number {return Math.ceil((index-2)/2)}

     public leftChild(index: number): number {return this.nodes[this.getLeftAdjacentIndex(index)]}
     public rightChild(index: number): number {return this.nodes[this.getRightAdjacentIndex(index)]}
     public parent(index: number): number {return this.nodes[this.getFatherIndex(index)]}

     public add (element: number): void {this.nodes.push(element)}
     public remove(): number | undefined {return this.nodes.pop()}
     public peek(): number {return this.nodes[this.nodes.length - 1]}
   
  // public isFull(): Boolean {
    /** #isFull
     * Função utilizada para verificar se uma pilha está cheia
     * (ou seja, não é mais possível armazenar itens)
     */
  // }

  // public isEmpty(): Boolean {
    /** isEmpty
     *  Função que verifica se uma pilha está vazia
     *  (não é possível armazenar mais it)
     */
  // }
}

export {Heap};