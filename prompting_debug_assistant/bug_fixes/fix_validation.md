# Fix Validation

## Bug 1 – bug1_fixed.py

### Test Case 1
- **Input:** [10, 20, 30, 40]
- **Expected Output:** 25.0
- **Actual Output:** 25.0 ✅

### Test Case 2
- **Input:** [5]
- **Expected Output:** 5.0
- **Actual Output:** 5.0 ✅

### Test Case 3
- **Input:** []
- **Expected Output:** 0
- **Actual Output:** 0 ✅

### Validation
- Code runs without errors. ✅
- Handles empty list safely. ✅


---

## Bug 2 – bug2_fixed.js

### Test Case 1
- **Input:** price = 100, discount = 20%
- **Expected Output:** 80
- **Actual Output:** 80 ✅

### Test Case 2
- **Input:** price = 50, discount = 10%
- **Expected Output:** 45
- **Actual Output:** 45 ✅

### Test Case 3
- **Input:** price = 200, discount = 0%
- **Expected Output:** 200
- **Actual Output:** 200 ✅

### Validation
- Discount correctly subtracted. ✅


---

## Bug 3 – bug3_fixed.py

### Test Case 1
- **Input:** "Charlie"
- **Expected Output:** User not found
- **Actual Output:** User not found ✅

### Test Case 2
- **Input:** "Alice"
- **Expected Output:** {"name": "Alice"}
- **Actual Output:** {"name": "Alice"} ✅

### Validation
- Handles missing user safely. ✅
- Prevents NoneType error. ✅


---

## Bug 4 – bug4_fixed.java

### Test Case 1
- **Input:** [85, 90, 78, 92, 88]
- **Expected Output:** Total score: 433
- **Actual Output:** Total score: 433 ✅

### Validation
- Fixed array index out-of-bounds error. ✅
- Correct loop boundary applied. ✅


---

## Bug 5 – bug5_fixed.js

### Test Case 1
- **Input:** {"name":"Sarah","age":28}
- **Expected Output:** Age next year: 29
- **Actual Output:** Age next year: 29 ✅

### Test Case 2
- **Input:** {"name":"Sarah","age":28}
- **Expected Output:** SARAH
- **Actual Output:** SARAH ✅

### Validation
- Fixed string concatenation issue. ✅
- Fixed incorrect object property name. ✅
- Code runs without errors. ✅
