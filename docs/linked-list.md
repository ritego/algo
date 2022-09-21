# Algo

## Docs

## Linked List

### Introduction
1. A linked list is a linear collection of data elements, in which linear order is not given by their physical placement in memory. Each pointing to the next node by means of a pointer. It is a data structure consisting of a group of nodes which together represent a sequence.

2. A LinkedList is a data structure consisting of nodes in memory, and every field stores a pointer to the following field, forming a connection to nodes of the list. The data fields aren’t in the exact memory location. But using pointers, they get to connect and reference each other just like arrays.

3. LinkedList is more efficient and preferable to arrays because they can store heterogeneous data, are dynamically sized, insertion is faster, and they are memory-efficient than arrays. 

4. Linked lists are also the backbone of more complex data structures such as stacks and queues. The idea of linking each node with pointers also carries over to other data structures such as trees and graphs.

4. Go has built in `list` and `container` types:
- `container` The container package contains the implementation of several data structures and their algorithms in Go.
- `container/list` The list package, on the other hand, includes an implementation of the LinkedList data structure you can use in your Go programs. 

1. Types
```go
type Node struct {
	prev *Node // for only doubly and circular types
	next *Node
	val  any
}

type Container struct {
	head *Node
	tail *Node // for only circular types
}
```

2. Behaviours
- Insert
```go
```

- Display
```go
```

- Reverse
```go
```

- First
```go
```

- Last
```go
```

- Next
```go
```

- Length
```go
```


2. Types
- Singly
- Doubly
- Circular
- Singly
