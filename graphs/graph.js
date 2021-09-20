class Graph {
  constructor() {
    this.nodes = 0;
    this.adjecentList = {};
  }
  addVertex(node) {
    this.adjecentList[node] = [];
    this.nodex++;
  }
  addEdge(node1, node2) {
    this.adjecentList[node1].push(node2);
    this.adjecentList[node2].push(node1);
    return this;
  }
}

const myGraph = new Graph();
