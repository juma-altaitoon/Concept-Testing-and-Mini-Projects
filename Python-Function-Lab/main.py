# Challenge 1 (Sum to)
def sum_to(n):
    y = 0
    for x in range(1,n+1):
        y += x
    print(y)
    return y
    
print(sum_to(6))
print(sum_to(10))


# Challenge 2 (Largest)
def largest(num_list):
    x = max(num_list)
    print(x)
    return x

largest([1, 2, 3, 4, 0])  # returns 4
largest([10, 4, 2, 231, 91, 54])  # returns 231


# Challenge 3 - Occurances
def occurances(string_1, string_2):
    counter =string_1.count(string_2)
    print(counter)
    return counter

occurances('fleep floop', 'e')   # returns 2
occurances('fleep floop', 'p')   # returns 2
occurances('fleep floop', 'ee')  # returns 1
occurances('fleep floop', 'fe')  # returns 0

# Challenge 4 - Product *args
def product(*args):
    result = 1
    for arg in args:
        result *= arg
    print(result)
    return result

product(-1, 4) # returns -4
product(2, 5, 5) # returns 50
product(4, 0.5, 5) # returns 10.0
