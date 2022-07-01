def arithmean(numbers):  # receives a list of numbers as an argument
    list = []  # empty list
    for number in numbers:  # iterates through numbers
        list.append(number)  # push them on the list
    return sum(list) / len(list)  # returns the arithimetic mean


# another version without a list

def arithmean2(numbers):
    total_numbers = 0
    for number in numbers:
        total_numbers += number
    return total_numbers / len(numbers)
