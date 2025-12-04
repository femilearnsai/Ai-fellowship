import my_data.data as data
import utils

# Add some students 
data.add_student("Paul", "AI Engineering")
data.add_student("Blessing", "AI Development")

# Print formatted 
for s in data.get_students():
    print(utils.format_student(s))