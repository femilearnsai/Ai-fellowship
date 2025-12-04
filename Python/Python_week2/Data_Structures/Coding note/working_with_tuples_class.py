# using parenthesis
# tuple with multiple items 
# fruits = ("apple", "banana", "cherry")
# print(fruits)
# without parenthesis 
# numbers = 1, 2, 3 
# print(numbers) 
# 3 single items tuple (must include a comma)
# single_item = ("apple",)
# print(single_item)
# print(type(single_item)) ???
# Using Tupple constructor
# fruits_list = ["apple", "banana", "cherry"]
# fruits_tuple = tuple(fruits_list)
# print(fruits_tuple) similar usage??
# ordered 
# colors = ("red", "green", "blue")
# print(colors[0])
# Immutable (uncomment and run. This will cause an error)
# colors[1] = "yellow"
# Allow duplicates
# numbers = (1, 2, 2, 3)
# print(numbers)
# Mixed data types 
# mixed = ("apple", 3, True, 5.6)
# print(mixed)
# Nested tuples 
# nested = (("a", "b"), (1, 2))
# print(nested)
# Tuple operation indexing
# fruits = ("apple", "banana", "cherry")
# print(fruits[1])
# print(fruits[-1])
# # Slicing 
# print(fruits[0:2])
# print(fruits[::-1])
# # Concatenation 
# tuple1 = (1, 2)
# tuple2 = (3, 4)
# result = tuple1 + tuple2
# print(result)
# # Repitition 
# nums = (1, 2)
# print(nums * 3)
# Membership 
fruits2 = ("apple", "banana", "cherry")
print("banana" in fruits2)
print("grapes" not in fruits2)
# Iterations
for fruits2 in fruits2:
    print(fruits2)
person = ("John", 25, "Nigeria")
name, age, country = person
print(name)
print(age)
print(country)
# # Tuple method
# numbers = (1, 2, 2, 3, 4)
# print(numbers.count(2))
# print(numbers.index(3))
# Converting btw list and Tuple
# Tuple to list 
# t = (1, 2, 3)
# lst = list(t)
# lst.append(4)
# print(lst)
# # list back to tuple 
# t2 = tuple(lst)
# print(t2)
# # Built-in functions with Tuples 
# nums = (4, 1, 7, 3)
# print(len(nums))
# print(max(nums))
# print(min(nums))
# print(sum(nums))