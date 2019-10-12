/**
 * @class LinkedList - implement doubly linked list data structure.
 */

 // конструктор должен реализовать структуру данных - двусвязный список
 // заводим значение head, tail, lengh

const Node = require('./node');

class LinkedList {
    constructor() {
        this.length = 0;
        this._head = null;
        this._tail = null;
    }

    // should add new data to the end of list
    append(data) {
        // create new node
        let node = new Node(data);
        // if we haven't got any node, we should assign any nodes to this._head and this._tail 
        if (this.length === 0) {
            this._head = node;
            this._tail = node;
        } else { 
            // if we already have node, we should add new data to the end of the linked list
            let curNode = this._tail;
            curNode.next = node;
            node.prev = curNode;
            this._tail = node;
        }
        // increase length of the linked list
        this.length++;
    }

    // should return data from the this.head
    head() {
        return this._head.data;
    }

    // should return data from the this.tail
    tail() {
        return this._tail.data;
    }

    // should return Node.data by index
    at(index) {
        let head = this._head;

        while (index !== 0) {
            head = head.next;
            index--;
        }
        
        return head.data;
    }

    // should insert data by index
    insertAt(index, data) {}

    // should return true if list is empty
    isEmpty() {}

    // should clear the list
    clear() {}

    // should delete element by index
    deleteAt(index) {}

    // should reverse the list
    reverse() {}

    // should return index of element if data is found
    indexOf(data) {}
}

module.exports = LinkedList;
