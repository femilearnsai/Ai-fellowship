# # range()
# for i in range(3):
#     print(i)
# # zip()
# names = ["Esther", "Precious", "Kennie"]
# scores = [85, 90, 75]
# for n, s in zip(names, scores):
#     print(n, "scored" , s)
# # map()
# nums = [1, 2, 3, 4]
# squared = list(map(lambda x: x**2, nums))
# print(squared) 
# # filter()
# even_nums = list(filter(lambda x: x % 2 == 0, nums))
# print(even_nums)

# # Student Performance & Feedback System
# # Step 1: Input  student data
# name1 = input("Enter first student name: ")
# score1 = int(input("Enter score for " + name1 + ": " ))

# name2 = input("Enter second student name: ")
# score2 = int(input("Enter score for " + name2 + ": "))

# name3 = input("Enter third student name: ")
# score3 = int(input("Enter score for " + name3 + ": "))

# # Step 2: Store in lists
# names = [name1, name2, name3]
# scores = [score1, score2, score3]

# # Step 3: Display data
# print("\nStudent Data:")
# for index, (n, s) in enumerate(zip(names, scores)):
#     print(f"{index + 1}. {n} - {s}")

# # Step 4: Summary using built -ins
# total = sum(scores)
# average = round(total / len (scores), 2) 
# highest = max(scores)
# lowest = min(scores)

# print("\nPerformance Summary:")
# print("Total Score:", total)
# print("Average Score:", average)
# print("Highest Score:", highest)
# print("Lowest Score:", lowest)

# # Step 5: Ranking (using sorted and zip)
# ranked = sorted(zip(scores, names), reverse=True)
# print("\nRanking:")
# for rank, (score, name) in enumerate(ranked, 1):
#     print(f"{rank}. {name} - {score}")

# # Step 6 Check data types
# print("\nData Type Checks:")
# print("Type of names:", type(names))
# print("Type of scores:", type(scores))
# print("ID of names list:", id(names))
# print("ID of scores list:", id(scores))

# #Step 7: Filter passing students (>=50)
# passing = list(filter(lambda s: s >= 50, scores))
# print("\nPassing Scores:", passing)

# # Step 8: Map names to uppercase
# upper_names = list(map(lambda n: n.upper(), names))
# print("Uppercase Names:", upper_names)

# # Step 9: Use help() to show documentation of len
# print("\nHelp on len():")
# help(len)

# # Defining a function 
# def greet():
#     print("Hello, welcome to AI Fellowship!")

# # When you want to use a function, this is how to call it. 
# # And you can call it as many times as possible.
# greet() 

# # Function with an argument - the placeholder 
# def greet(name):
#     print("Hello", name, "welcome to Python Learning")

# # Calling with parameter - the actual name
# greet("Class rep")
# greet("Ridwan")

# def greet(name):
#     print("Hello", name)

# # Function call
# result = greet("Esther")

# #You will notice that it did not store the name
# print("Result:", result)

# def add(a, b):
#     return a + b

# # Function call
# result = add(4, 6)
# print("The sum is:", result)

# def count_up_to(n):
#     i = 1 
#     while i <= n:
#         yield i 
#         i += 1

# # Using the generator
# for number in count_up_to(5):
#     print(number)

# #1. Positional Arguments 
# def introduce(name, track):
#     print("My name is", name)
#     print("I am learning", track, ".")
    
# # Function call
# introduce("Ngozi", "AI Engineering")
# introduce("AI Engineering", "Ngozi")

# #2. Keyword Arguments
# def introduce(name, track):
#     print("My name is", name)
#     print("I am learning", track, ".")

# # function call 
# introduce(name = "Ngozi", track= "AI Engineering")

# # Change the arrangement and watch the output
# introduce(track = "AI Engineering", name = "Ngozi")

# #3. Default Arguments
# def introduce(name, track = "AI Engineering"):
#     print("My name is", name)
#     print("I am learning", track , ".")

# # function call
# # Without specifying the default argument, but watch the output
# introduce("Paul")

# #Specify the default argument and watch the output
# introduce("Tunji Paul", track = "AI Development")

# #4. Varying Length Arguments
# # non-keyword(tuple)
# def add_numbers(*args):
#     total = 0
#     for num in args:
#         total += num
#     print("Sum:", total)
# # function call
# # Take note of the output
# add_numbers(2, 4, 6)
# add_numbers(10, 20, 30, 40, 50)

# # keyword argument(dictionary)
# def student_details(**kwargs):
#     for key, value in kwargs.items():
#         print(key, ":", value)

# # function call - Take note of the output
# student_details(name="Peter", track = "AI Engineering", interest = "Blockchain")

# Define student profile function 
# Ensure to not the order of arrangement of thetypes of arguments used.
# This is how to arrnge it of you are using everything or some of the together
def participant_profile(name, age, track="AI Development", *skills, **extra_info):
    """
    Generate a profile for a bootcamp participant using different types of arguments.
    """
    profile = f"\n--- Bootcamp Participant Profile ---\n" 
    profile += f"Name: {name}\n"
    profile += f"Age: {age}\n"
    profile += f"Track: {track}\n"

    # Skills (from *args)
    if skills:
        profile += "Skills: " + ", ".join(skills) + "\n"
    else:
        profile += "Skills: Not yet specified\n"

    # Extra info (from **kwargs)
    if extra_info:
        profile += "Additional Info:\n"
        for key, value in extra_info.items():
            profile += f" -{key.capitalize()}: {value}\n"
    return profile 

#Example 1: Using only positional arguments
print(participant_profile("Peter", 24))
#Example 2: Adding keyword/default argument
print(participant_profile("Ridwan", 29, track= "AI Engineering"))
#Example 3: Adding variable-length positional arguments (*args)
print(participant_profile("David", 27, "Data Science", "Python", "SQL", "Machine Learning"))
# Example 4: Adding variable-length keyword arguments (**kwargs)
print(participant_profile(
    "Sophia", 30, "Cybersecurity",
    "Networking", "Ethical Hacking", "Python",
    interest="Blockchain", city="Shagamu", phone="08123456789"
))

#Global Namespace
employee = "General Employee"
def IT_department():
    # Local Namespace inside IT_department
    employee = "Chris (IT)"
    print("Inside IT department:", employee)

def Training_department():
    # Local Namespace inside Training_department
    employee = "Chris (Training)"
    print("Inside Training Department:", employee)

print("In Global Namespace:", employee)
IT_department()
Training_department()

# Scope defines where in the codename is accessible. for the search of variable, it uses Local-inside local function, Enclosing-inside any enclosing function, Global-Top level, Built-in
x = "global x"

def outer():
    x = "enclosing x"

    def inner():
        x = "local x"
        print("Insider inner:", x)

    inner()
    print("In global:", x)

### Global keywords
x = 5 

def change_global():
    global x
    x = 10

change_global()
print(x)

# non local keyword

def outer(): 
    x = "outer x"

    def inner():
        nonlocal x 
        x = "changed by inner"
        print("Inside inner:", x)

    inner()
    print("Insider outer:", x)
outer()