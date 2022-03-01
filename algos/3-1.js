/**
 * Class to represent a Node in a Binary Search Tree (BST).
 */
 class Node {
    /**
     * Constructs a new instance of a BST node.
     * @param {number} data The integer to store in the node.
     */
    constructor(data) {
    this.data = data;
    this.left = null;
    this.right = null;
    }
}


class BinarySearchTree {
    constructor() {
    this.root = null;
    }

    isEmpty() {
      // determine if the BST is empty and return a boolean
    if(this.root === null) {
    return true;
    } 
    return false;
    }

    contains(searchVal){
      //Determine if the tree contains the given searchVal
    if(this.root === null) {
    return null;
    } 
    
    while(searchVal != current.data){
    if(current === null){
        return false; 
    }
    if(searchVal < current.data) {
        current = current.left; 
    }
    if(searchVal > current.data){
        current = current.right; 
    }
    
    }

    containsRecursive(searchVal){
      //Determine if the tree contains the given searchVal using recursive
    }

    range(current = this.root){
      // find the range of the tree
    }