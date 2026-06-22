# Bug Descriptions

## Bug 1 – bug1.py

**Intended Behavior**: Calculate and return the average value of a list of numbers.

**Issue Type**: Syntax error.

**Notes**: The function call at the end of the file contains a missing closing parenthesis.

---

## Bug 2 – bug2.js

**Intended Behavior**: Apply a percentage discount to a product price and return the discounted amount.

**Issue Type**: Logical error.

**Notes**: The function adds the discount to the price instead of subtracting it.

---

## Bug 3 – bug3.py

**Intended Behavior**: Search for a user by name and display the user's information if found.

**Issue Type**: Runtime exception.

**Notes**: The code attempts to access a property on a `None` value when the user does not exist.

---

## Bug 4 – bug4.java

**Intended Behavior**: Calculate and display the total of all values stored in an array.

**Issue Type**: Off-by-one / loop logic error.

**Notes**: The loop iterates one position beyond the last valid array index.

---

## Bug 5 – bug5.js

**Intended Behavior**: Parse user data from JSON, calculate the user's age next year, and display the user's name in uppercase.

**Issue Type**: Data type and library misuse.

**Notes**:

* String concatenation is performed instead of numeric addition.
* The object property name uses incorrect capitalization (`Name` instead of `name`).
