class Node {
    constructor(data, next = null) {
        this.data = data;
        this.next = next;
    }
}

class LinkedList {
    constructor(head = null) {
        this.head = head
    }

    createListNode(data, next = null) {
        return {
            data: data,
            next: next
        }
    }

    size() {
        let count = 0;
        let node = this.head;
        while (node) {
            count++;
            node = node.next
        }
        return count;
    }

    clear() {
        this.head = null;
        return "SUCCESS";
    }

    getFirst() {
        return this.head;
    }

    getLast() {
        let lastNode = this.head;
        if (lastNode) {
            while (lastNode.next) {
                lastNode = lastNode.next
            }
        }
        return lastNode
    }

    getAt(index) {
        let counter = 0;
        let node = this.head;
        while (node) {
            if (counter === index) {
                return node;
            }
            counter++;
            node = node.next;
        }
        return null;
    }

    insertAtBeginning(data) {
        let nodeToInsert = new Node(data);
        const firstNode = this.getFirst();
        nodeToInsert.next = firstNode;
        this.head = nodeToInsert;
    }

    insert(data) {
        let nodeToInsert = new Node(data);
        let lastNode = this.getLast();
        lastNode.next = nodeToInsert;
    }

    insertAt(data, position) {
        // if the list is empty
        if (!this.head) {
            let newNode = new Node(data);
            this.head = newNode;
            return;
        }

        const currentNode = this.getAt(position - 1);
        let newNode = new Node(data);
        newNode.next = currentNode.next;
        currentNode.next = newNode;
        return 'Node has been inserted successfully.'
    }

    deleteAt(position) {
        const currentNode = this.getAt(position - 1);
        currentNode.data = currentNode.next.data;
        currentNode.next = currentNode.next.next;
    }

    deleteList() {
        this.head = null;
    }
}

const createInitialLinkedList = () => {
    const linkedListObj = new LinkedList();
    // creating nodes
    const head = new Node(10);
    const node1 = new Node(11);
    const node2 = new Node(13);
    const node3 = new Node(14);

    // adding pointers for the next node to the previous node
    head.next = node1;
    node1.next = node2;
    node2.next = node3;

    return new LinkedList(head);
}

// create linked list now with the first node (node1)
const list = createInitialLinkedList();

console.log(list.deleteAt(3));
console.log("\n========================================================================================== \n")
console.log(JSON.stringify(list, 0, 4));