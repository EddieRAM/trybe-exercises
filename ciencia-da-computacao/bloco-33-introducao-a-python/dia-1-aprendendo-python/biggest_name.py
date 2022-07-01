def biggest_nam(names):  # receives a list of strings argument
    biggest = names[0]  # biggest is always the first argument
    for name in names:  # iterates through names on the list
        if len(name) > len(biggest):  # verifies if the first is the biggest
            biggest = name  # if not, the biggest is now the first
            return biggest  # return the biggest
