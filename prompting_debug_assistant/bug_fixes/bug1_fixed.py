def calculate_average(numbers):
    """Calculate the average of a list of numbers."""

    if len(numbers) == 0:
        return 0

    total = 0

    for number in numbers:
        total += number

    average = total / len(numbers)

    return average


# Test cases
assert calculate_average([10, 20, 30, 40]) == 25.0
assert calculate_average([5]) == 5.0
assert calculate_average([]) == 0

print("All tests passed!")
