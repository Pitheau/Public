/** reference: 
http://btv.melezinek.cz/binary-search-tree.html
 */
/** reference: 
http://btv.melezinek.cz/binary-search-tree.html
 */
class Node {
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
}

min(current = this.root) {
//return the smallest integer data
if (current === null) {
return null;
}

while (current.left) {
current = current.left;
}
return current.data;
}

minRecursive(current = this.root) {
if (current === null) {
    return null;
}

if (current.left === null) {
    return current.data;
}
return this.minRecursive(current.left);
}

max(current = this.root) {
//return the largest integer data
if (current === null) {
return null;
}

while (current.right) {
current = current.right;
}
return current.data;
}

maxRecursive(current = this.root) {
if (current === null) {
    return null;
}

if (current.right === null) {
    return current.data;
}
return this.minRecursive(current.right);
}
//using recursive, finding the maximum
}

// Logs this tree horizontally with the root on the left.
print(node = this.root, spaceCnt = 0, spaceIncr = 10) {
    if (!node) {
        return;
    }
}

spaceCnt += spaceIncr;
this.print(node.right, spaceCnt);

console.log(
    " ".repeat(spaceCnt < spaceIncr ? 0 : spaceCnt - spaceIncr) +
    `${node.data}`
);

this.print(node.left, spaceCnt);
}


const emptyTree = new BinarySearchTree();


const oneNodeTree = new BinarySearchTree();
oneNodeTree.root = new Node(10);

/** reference: 
http://btv.melezinek.cz/binary-search-tree.html
*/
class Node {
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
}

min(current = this.root) {
//return the smallest integer data
if (current === null) {
    return null;
}

while (current.left) {
    current = current.left;
}
return current.data;
}

minRecursive(current = this.root) {
    if (current === null) {
    return null;
    }

    if (current.left === null) {
    return current.data;
    }
    return this.minRecursive(current.left);
}

max(current = this.root) {
//return the largest integer data
if (current === null) {
    return null;
}

while (current.right) {
    current = current.right;
}
return current.data;
}

maxRecursive(current = this.root) {
    if (current === null) {
    return null;
    }

    if (current.right === null) {
    return current.data;
    }
    return this.minRecursive(current.right);
}
    //using recursive, finding the maximum
}

// Logs this tree horizontally with the root on the left.
print(node = this.root, spaceCnt = 0, spaceIncr = 10) {
    if (!node) {
    return;
    }

    spaceCnt += spaceIncr;
    this.print(node.right, spaceCnt);

    console.log(
    " ".repeat(spaceCnt < spaceIncr ? 0 : spaceCnt - spaceIncr) +
        `${node.data}`
    );

    this.print(node.left, spaceCnt);
}


const emptyTree = new BinarySearchTree();


const oneNodeTree = new BinarySearchTree();
oneNodeTree.root = new Node(10);
