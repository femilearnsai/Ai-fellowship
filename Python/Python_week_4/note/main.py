import my_package

print(my_package.add(5, 3))
print(my_package.subtract(10, 4))
print(my_package.capitalize_text("python"))

# or import specific modules
from my_package import string_utils

print(string_utils.reverse_text("hello"))