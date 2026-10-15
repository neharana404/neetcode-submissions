
class Node:
    def __init__(self, key=0, value=0):
        self.key = key
        self.value = value
        self.prev = None
        self.next = None


class LRUCache:

    def __init__(self, capacity: int):
        self.capacity = capacity
        self.cache = {}  # key -> Node

        # Dummy head and tail
        self.head = Node()
        self.tail = Node()

        self.head.next = self.tail
        self.tail.prev = self.head

    # Remove an existing node from the linked list
    def remove_node(self, node):
        prev_node = node.prev
        next_node = node.next

        prev_node.next = next_node
        next_node.prev = prev_node

    # Insert a node just before tail (most recently used)
    def add_to_tail(self, node):
        prev_node = self.tail.prev

        prev_node.next = node
        node.prev = prev_node

        node.next = self.tail
        self.tail.prev = node

    def get(self, key: int) -> int:
        if key not in self.cache:
            return -1

        node = self.cache[key]

        # Move accessed node to most recently used position
        self.remove_node(node)
        self.add_to_tail(node)

        return node.value

    def put(self, key: int, value: int) -> None:
        if key in self.cache:
            # Update existing node
            node = self.cache[key]
            node.value = value

            self.remove_node(node)
            self.add_to_tail(node)
        else:
            # Create a new node
            node = Node(key, value)
            self.cache[key] = node
            self.add_to_tail(node)

            # Remove least recently used node if over capacity
            if len(self.cache) > self.capacity:
                lru_node = self.head.next

                self.remove_node(lru_node)
                del self.cache[lru_node.key]
