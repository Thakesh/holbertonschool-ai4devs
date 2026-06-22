def calculate_average(numbers):
    total = 0

    for number in numbers:
        total += number

    average = total / len(numbers)

    return average

print(calculate_average([10, 20, 30, 40]))
