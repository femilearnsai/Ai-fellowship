# Calculator program
def add(a, b):
    return a + b
def subtract(a, b):
    return a - b
def multiply(a, b):
    return a * b
def division(a, b):
    return a / b
def exponential(a, b):
    return a ** b


while True:
    print("Welcome to my simple calculator!\nchoose the operation you want to perform:")
    print("1. To Add\n2. To Subtract\n3. To Multiply\n4. division\n5. sqrt\n6. Exponentials\n7. To exit")

   
    try:
        choice = input("Input your choice of operation here: ")
        if choice == '1' or choice == '2' or choice == '3'  or choice =='4' or choice == '6':
            num1 = float(input("Please enter the first number: ")) 
            num2 = float(input("Please enter the second number: "))      
        elif choice == '5':
            num = float(input("Please enter the number: "))
        elif choice == '7':
            print("Exiting the program.")
            break
        else:
            print("Enter a valid option!!!")

        if choice == '1':
            print("Answer:", add(num1, num2))
        elif choice == '2':
            print("Answer:", subtract(num1, num2))
        elif choice == '3':
            print("Answer", multiply(num1, num2))
        elif choice == '4': 
            print("Answer:", division(num1, num2))
        elif choice == '5':
            from math import sqrt
            print("Answer:", sqrt(num))
        elif choice == '6':
            print("Answer:", exponential(num1, num2))
        else:
            print("Invalid input")
        
    except:
        print("Enter a valid number")
    break
    

    
    
        


