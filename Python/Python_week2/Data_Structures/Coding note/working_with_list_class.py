# # Method 1: Using square brackets 
# empty_list = []
# print(empty_list)
# Method 2: Using the list() constructor
# empty_list2 = list()
# print(empty_list2)
# List of integers
# numbers = [1, 2, 3, 4, 5]
# print(numbers)
# #list of strings
# fruits = ["apple", "banana", "cherry"]
# print(fruits)
# drinks = ['coke', 'fanta', 'sprite']
# print(drinks)
# # Mixed data types 
# mixed_list = ["Alice", 25, 5.8, True]
# print(mixed_list)
# creating a list from another sequence. 
# chars = list("hello")
# print(chars)
# must = (list("enilolobo"))
# print(must)
# # From a tuple
# my_tuple = (10, 20, 30)
# list_from_tuple = list(my_tuple)
# print(list_from_tuple)
# From a range 
# numbers_range = list(range(5)) 
# print(numbers_range)
# Squares of numbers 0-4
# squares = [x**2 for x in range(5)]
# print(squares)
# Even numbers between 0-10
# evens =[x for x in range (20) if x % 5 == 0]
# print(evens)
# creating a Nested List.
# Matrix-like list
# matrix = [[1, 2], [3, 4], [5, 6]]
# print(matrix)
# Accessing elements in a nested list 
# print(matrix[0])
# print(matrix[0][1])
# ordered collections 
# fruits = ["mango", "orange", "banana"]
# print(fruits)
# print(fruits[0])
# print(fruits[2])
# # Allows Duplicates
# items = ["rice", "beans", "yam", "rice"]
# print(items)
# # Mutable (can be changed)
numbers = [1, 2, 3]
numbers[1] = 20 
print(numbers)
# # Can contain different data types
# mixed = [10, 'Nigeria', 3.14, True]
# print(mixed) 
# can be nested 
# nested_list = [[1, 3], ["a", "b"]]
# print(nested_list)
# print(nested_list[1][0])
# # dynamic size
# names = ["Ada"]
# names.append("Bola")
# names.append("chidi")
# print(names)
# chars = list("the boy is god")
# print(chars)
# List Operations in python 
# Concatenation
list1 = [1, 2, 3]
list2 = [4, 5]
result = list1 + list2
print(result)
#Repition (*)
# nums = [1, 2]
# repeated = nums * 3
# print(repeated)
# # Indexing 
# fruits = ["apple", "banana", "cherry"]
# print(fruits[0])
# print(fruits[-1])
# # Slicing 
# numbers = [0, 1, 2, 3, 4, 5]
# print(numbers[1:4])
# print(numbers[:3])
# print(numbers[3:])
# print(numbers[::2])
# # membership (in / not in)
# colors = ["red", "green", "blue"]
# print("green" in colors)
# print("yellow" not in colors)
# #lenght (len())
# items =["pen", "book", "laptop"]
# print(len(items))
# # Min and Max (min()/max())
# nums =[5, 2, 9, 1]
# print(min(nums))
# print(max(nums))
# # Sum (sum())
# numbers = [1, 2, 3, 4]
# print(sum(numbers))
# # List comprehension 
# squares = [x**2 for x in range(5)]
# print(squares)
# # Copying a list 
# a = [1, 2, 3]
# b = a.copy()
# b = list(a)
# print(b)
##list methods
# dot append() method
fruits = ["apple", "banana"]
fruits.append("cherry")
print(fruits)
# dot insert() method
fruits2 = ["apple", "banana"]
fruits2.insert(1, "orange")
print("fruits")
# dot extend() method 
fruits3 = ["apple", "banana"]
tropical = ["mango", "pineapple"]
fruits3.extend(tropical)
print(fruits3)
# dot remove() method 
fruits4 = ["apple", "banana", "cherry", "banana"]
fruits4.remove("banana")
print(fruits4)
#dot pop() method 
fruits5 = ["apple", "banana", "cherry"]
last_fruits = fruits5.pop()
print(last_fruits)
print(fruits5)
# dot clear() method 
fruits6 = ["apple", "banana", "cherry"]
fruits6.clear()
print(fruits6)
# dot index() method 
fruits7 = ["apple", "banana", "cherry"]
position =fruits7.index("banana")
print(position)
# dot count() method 
fruits8 = ["apple", "banana", "cherry", "banana"]
print(fruits8.count("banana"))
