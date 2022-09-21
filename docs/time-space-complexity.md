# Algo

## Docs

## Time & Space Complexity

1. Rate of increase of time/space wrt to input size of a function

2. Types
- Big O
- Little O
- Big Ω
- Little Ω
- Big Θ 

3. Big O
- O(1) => Constant
- O(log n) => Logarithmic
- O(n) => Linear
- O(n log n) => Logarithmic linear
- O(n^2) => Quadratic
- O(n^m) => Polynomial
- O(m^n) => Exponential
- O(n!) => Factorial

3. General Maths Operations
- Addition is O(1) e.g 2 + 1
- Subtraction is O(1) e.g 2 - 1
- Multiplication is O(1) e.g 2 * 1
- Division is O(1) e.g 2/1

4. Bitwise Operations
- AnD (&) is O(n)
- OR (|) is O(n)
- nOT (~) is O(n)
- XOR (&) is O(n)
- SHIFT LEFT (<<) is O(n)
- SHIFT RIGHT (>>) is O(n)

- Addition
```
Sample: 0011 & 0101

Table:
a   b   carry(&)   sum(XOR)
0   0   0           0
0   1   0           1
1   0   0           1
1   1   1           0

Pseudo Code:
a, b = 0011, 0101

while b !=0 {
    a = a^b //a XOR b
    b = (a & b) << 1 //a AnD b, then SHIFT LEFT
}

return a
```

- Subtraction
```
Sample: 0011 & 0101

Table:
a   b   borrow(~a & b)   diff(XOR)
0   0   0               0
0   1   0               1
1   0   0               1
1   1   1               0

Pseudo Code:
a, b = 0011, 0101

while b !=0 {
    a = a^b //a XOR b
    b = (~a & b) << 1 //~a AnD b, then SHIFT LEFT
}

return a
```

5. Array Operations
- Access ith element O(1)
- Transverse O(n)
- Update ith element O(i)
- Insert O(n)
- Delete O(n)

6. Sorting Operations
- Bubble sort O(n^2)
- Selection sort O(n^2)
- Insertions sort O(n^2)
- Heap sort O(n log n)
- Quick sort O(n^2)
- Merge sort O(n log n)

7. Search Operations
- Binary search O(log n)
- Linear search O(n)
- Hash Map search O(n)

8. Notes
- Do not consider constants. For instance, O(2n)and O(5n) can be loosely said to belong to the family of functions O(n)

9. Reference
- https://www.amazon.com/Time-Complexity-Analysis-Coding-Interviews-ebook/dp/B09FF18MFH

