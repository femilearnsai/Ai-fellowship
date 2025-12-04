#creating dictionaries 
#1. Using curly braces
student = {
    "name" : "Ada",
    "age" : 20,
    "course": "Computer Science"

}
print(student)   # Example 2
student2 = {
    "name": "Sunny Ade",
    "Age" : "74",
    "profession": "Muscician"
}
print(f"{student2["name"]} is a {student2["profession"]} and he is {student2["Age"]} years old.")
print(student2)    #Example 3
Students3 = {
    "name": "Otu Ade", 
    "Age": "89",
    "quote": "Joy is coming"
    }
print(Students3)

#Using the dict() constructor 
student_info = dict(name ="John", age=25, course="Maths")  #Example 1 
print(student_info)  

student2_info = dict(name = "Sunny Ade", Age=74, profession= "muisicians") #Example 2
print(student2_info)

students3_info = dict(name="Otu Ade", Age= "89", quote = "Joy is coming") #Example 3
print(students3_info)

# Empty dictionary
empty_dict = {}
print(empty_dict)

# Create dictionary of numbers and their squares 
squares = {x : x**2 for x in range(1, 6)}
print(squares)

#With Condition 
# Dictionary of even numbers and their cubes
evens_cube = {x: x**2 for x in range(1, 10) if x % 2 == 0}
print(evens_cube) 

# From Existing Dictionary
students = {"Ada": 85, "John": 40, "Musa": 65}
# Filters students who passed (score >= 50)
passed_students = {name: score for name, score in students.items() if score >= 50}
print(passed_students)

#Using Strings Keys
names = ["Ada", "John", "Musa"]
lengths = {name: len(name) for name in names}
print(lengths)

#Define a dictionary
student = {"name": "Ada", "age":20, "course": "Computer Science", "grade": "first class"}

# using key 
print(student["name"])

# Using get() method (avoids error if key is missing)
print(student.get("age"))
print(student.get("grade"  "Not found"))

# Removing items from dictionary 
# 1. Using pop()
student.pop("grade")
print(student)

# 2. using popitems() removes last key- value
student.popitem()

#3. Using del keyword
del student["course"]
print(student)

#using clear() - removes all items
student.clear()
print(student)

person = {"name": "Emeka", "age": 30}

# to discover the keys()
print(person.keys())

# to discover the values()
print(person.values())

# to discover the items()
print(person.items())

# update
person.update({"age": 31, "city": "Lagos"})
print(person)

# Nested Dictionary
students = {
    "student1": {"name": "Ada", "age": 20},
    "student2": {"name": "John", "age": 22}
}
print(f"{students["student1"]["name"]} is {students["student1"]["age"]}")
print(f"{students["student2"]["name"]} is {students["student2"]["age"]}")

#define a dictionary
student = {"name": "Ada", "Age": 20, "course": "Computer Science"}
# Loop through keys
for key in student.keys(): 
    print(key)
#loop through values 
for value in student.values():
    print(value)
# loop through key value pairs
for key, value in student.items():
    print(f"{key}: {value}")
# storing a student's biodata
student = {
    "name": "Chinedu",
    "age": 19,
    "department": "Engineering",
    "subjects": ["Maths", "Physics", "Chemistry"],
    "is_full_time": True

}
print(f"Name: {student['name']}")
print(f"Subjects: {', '.join(student['subjects'])}")
#storing a student's biodata
student = {"name": "Chinedu", "age": 19, "department": "Engineering", "subjects": ["Maths", "Physics", "Chemistry"], "is_full_time":True}
print(f"Name: {student['name']}"), print(f"Subjects:{','.join(student['subjects'])}")

# Create an empty dictionary
student2 = {}
#Add key-value pairs to it 
student2["name"] = "Goodness"
student2["Interest"] = "AI"
student2["Track"] = "AI_Dev"
print(student2)

# List of dictionaries - Each student has their own dictionary
student3 = [
    {"Name": "John", "Interest": "AI", "Track": "AI_Dev"},
    {"Name": "Mary","Interest": "Cloud Computing", "Track": "AI_Eng"},
    {"Name": "paul", "Interest": "Cyber Security", "Track": "AI_Dev"}
]

print(student3[0]["Name"])
print(student3[0]["Track"])
print(f"{student3[0]["Name"]} is on the {student3[0]["Track"]} track")
# Dictionary of dictionaries - Each student is keyed by their ID
student4 = {
    "AI010" : {"Name": "John", "Interest": "AI", "Track": "AI_Dev"},
    "AI020" : {"Name": "Mary", "Interest": "Cloud Computing", "Track": "AI_Eng"},
    "AI030" : {"Name": "Paul", "Interest": "Cyber Security", "Track": "AI_Dev"}

}
print(student4["AI020"]["Name"])
print(student4["AI030"]["Track"])
# Dictionary of lists - Each subjects stores a list of scores
scores = {
    "python": [85, 78, 92],
    "pandas": [88, 74, 90],
    "Scikit-learn": [80, 95, 87]

}
print(scores["python"])
print(scores["pandas"][1])