// DLLNodes have a .next and .prev
class DLLNode {
    constructor(data) {
        this.data = data;
        this.prev = null;
        this.next = null;
    }
}
// ⚠ other methods removed for brevity ⚠
// DLLists have both a .head and .tail pointer
class DLList {
    constructor() {
        this.head = null;
        this.tail = null;
    }

    // == Main Methods ==

    // return true or false if the current linked list is a palindrome
    // a palindrome is a string of characters equal to itself when reversed
    // assume your node.data are all numbers or lowercase chars
    isPalindrome() {
        let runner = this.head
        let reverse = this.tail
        while(runner.next != null)
            if(runner !== reverse){
                return false
            }else{
            runner = runner.next
            reverse = reverse.prev
            }
        }return true;
    }

    
    // ⚠ other methods removed for brevity ⚠
    // reverse a doubly linked list in place
    reverse() { }
    // ---------------------------
    // ⚠ other methods removed for brevity ⚠
    // remove and return the first node with data === val, if it exists
    // what if the list is empty?
    // what if the target val is the head?
    // what if the target val is the tail?
    // what if the target val is the only node in the list?
    removeVal(val) { }
    // ⚠ other methods removed for brevity ⚠


addHead(node) {
    if (this.head == null){
        return "list is empty"
    }
    if(!this.head){
        this.head = node;
        this.tail = node;
    }else{
        this.head.prev = node;
        node.next = this.head;
        this.head = node;
    }
}
}
var dllList = new DLList;
dllList.addHead(1);
dllList.addHead(2);
dllList.addHead(3);
dllList.addHead(4);
dllList.addHead(3);
dllList.addHead(2);
dllList.addHead(1);

console.log(isPalindrome(dllList))

// ⚠ ... other methods removed for brevity ⚠
// instantiate the DLL
// add a few nodes
// call the methods
// TEST EARLY and OFTEN!
// Good luck :)