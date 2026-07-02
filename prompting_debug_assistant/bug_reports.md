# Bug Reports

---

## Bug Report – bug1.py

- **Summary**: Function failed on empty list input due to division by zero.
- **Root Cause**: Attempting to divide by `len(numbers)` without checking if the list is empty.
- **Resolution**: Added a condition to return `0` when the input list is empty (AI-suggested fix).
- **Manual Edits**: None.
- **Lesson Learned**: Always validate inputs before performing arithmetic operations like division.

---

## Bug Report – bug2.js

- **Summary**: Discount function increased price instead of decreasing it.
- **Root Cause**: Incorrect use of `+` instead of `-` when applying discount calculation.
- **Resolution**: Changed formula to `price - (price * discountPercent / 100)` (AI suggestion).
- **Manual Edits**: None.
- **Lesson Learned**: Carefully verify business logic, not just syntax.

---

## Bug Report – bug3.py

- **Summary**: Program crashed when searching for a non-existent user.
- **Root Cause**: Attempted to access `"name"` property of `None`.
- **Resolution**: Added null check before accessing result fields (AI-suggested fix).
- **Manual Edits**: Added user-friendly fallback message ("User not found").
- **Lesson Learned**: Always handle `None` return values from search functions.

---

## Bug Report – bug4.java

- **Summary**: ArrayIndexOutOfBoundsException due to incorrect loop boundary.
- **Root Cause**: Loop used `i <= scores.length` instead of `i < scores.length`.
- **Resolution**: Fixed loop condition to prevent invalid index access (AI suggestion).
- **Manual Edits**: None.
- **Lesson Learned**: Array indices always run from `0` to `length - 1`.

---

## Bug Report – bug5.js

- **Summary**: Incorrect age calculation and runtime crash due to wrong property access.
- **Root Cause**:
  - String concatenation instead of numeric addition.
  - Incorrect object property name (`Name` instead of `name`).
- **Resolution**:
  - Replaced `"1"` with numeric `1`.
  - Fixed property reference to `user.name` (AI-suggested fixes).
- **Manual Edits**: None.
- **Lesson Learned**: JavaScript is case-sensitive and weakly typed—careful with types and property names.
