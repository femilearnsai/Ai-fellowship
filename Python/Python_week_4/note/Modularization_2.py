# 1. Import the whole module 
import math
print(math.sqrt(9)) #specify the function name when calling it
# 2. import as an alias
import math as m
print(m.sqrt(25)) # This shortens the module name and it is common with libraries like numpy, pandas, etc.
# 3. Import specific functions or variables
from math import sqrt
from math import pi
print(sqrt(36))
print(pi)
# Import everything from the module
from math import *

print(sqrt(49))
print(pi) 