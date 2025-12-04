name = input("name: ")
Age = int(input("Age: "))
if Age >= 18:
        print("you are eligible")
else: 
    print("You are not eligible")
gender = input("gender: ")
courses = input ("Courses: ")
User1 = {
    "name": name,
    "Age": Age,
    "gender": gender,
    "courses": [courses],
}
print(f"{User1["name"]}\t{User1["Age"]}\n{User1["gender"]}\t{User1["courses"]}")