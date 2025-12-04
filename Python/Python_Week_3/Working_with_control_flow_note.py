# # Conditional statement
# #1. If statement
# age = 20
# if age >= 18:
#     print("You are eligible to vote")

# #2. if else statement - provides two alternative paths
# wallet = 400
# price = 500
# if wallet >= price:
#     print("purchase successfull")
# else: 
#     print("Insufficient balance")

# #3.if-elif-else statement - Used for multiple conditions 
# score = 85
# if score >= 70: 
#     print("Grade A")
# elif score >= 50:
#     print("Grade B")
# else: 
#     print("Grade C")

# #4. Nested if  - placing an if inside another if. 
# age = 19
# citizen = True

# if age >= 18:
#     if citizen:
#         print("you can vote")
#     else:
#         print("You must be a citizen to vote")
# else: 
#     print("Too young to vote")

# # Loops
# #1. for loops - used for iterating over a sequence (strings, list, tuple, dictionary)
# fruits = ["apple", "banana", "orange"]
# for fruit in fruits:
#     print(f"I like {fruit}")

# coordinates = (0.34654, -0.48585, 0.57477)
# for point in coordinates:
#     print(f"Point: {point}")

# # iterating through elements in a dictionary 
# student = {"name": "Tunde", "age":16, "grade": "A"}
# for key, value in student.items():
#     print(f"{key}: {value}")

# #iterating through elements in a string
# word = "PYTHON"
# for char in word:
#     print(char)

# # While loop - this is used to repeatedly execute a block of code as long as the condition is true.
# count = 1
# while count <= 5:
#     print("Number:", count)
#     count += 1

# #Incrementing with 'while'
# num = 1 
# while num <= 10: 
#     print(num, end=" ")
#     num += 1

# #Decrement with 'while'
# timer = 10 
# while timer > 0:
#     print("Countdown:", timer)
#     timer -= 1 

#While with User input 
## Keep asking until the user enters a correct password.
# password = ""
# while password != "python123":
#     password = input("Enter the password: ")
    
# print("Access Granted!")

#while true  is an infinite loop - it keeps running until you explicitly stop it with a break statement or by exiting the program
# while True:
#     name = input("Enter your name (type 'exit' to quit): ")
#     if name.lower() == "exit":
#         print("Goodbye!")
#         break #not working
#     print(f"Hello, {name}")

# # loop control statement (break, continue and pass)
# #1. break -stops loop immediately
# for num in range(1, 10):
#     if num == 5:
#         break
#     print(num)

# continue - skips the current iteration and moves to the next one
for num in range(1, 6):
    if num == 3:
        continue
    print(num)

# pass - does nothing. a placeholder to avoid error.
for num in range(1, 6):
    if num == 3:
        pass
    else:
        print(num)

while True:
    print("\nMenu:")
    print("1. Say Hello")
    print("2. Say Goodbye")
    print("3. Exit")

    choice = input("choose an option: ")

    if choice == "1":
        print("Hello")
    elif choice == "2": 
        print("Goodbye")
    elif choice == "3":
        print("Exiting program...")
        break
    else:
        print("Invalid choice. Try again.")

while True: 
    age = input("Enter your age: ")
    if age.isdigit():
        print(f"Your age is {age}")
        break
    else:
        print("Invalid input. Please enter a number.")

# Guesses
secret = "python"

while True:
    guess = input("Guess the secret word: ")
    if guess.lower() == secret:
        print("Correct! You guessed the word.")
        break
    else:
        print("Wrong! Try again.")

balance = 1000
while True:
    print("\nATM Menu:")
    print("1. Check Balance")
    print("2. Withdraw")
    print("3. Exit")

    choice = input("Enter choice: ")

    if choice == "1":
        print(f"Your balance is: {balance}")
    elif choice == "2":
        amount = int(input("Enter withdrawal amount: "))
        if amount <= balance: 
            balance -= amount
            print(f"Withdrawal successful. New balance: {balance}")
        else:
            print("Insufficient funds.")
    elif choice == "3":
        print("Thank you for using our ATM. Goodbye!")
        break
    else:
        print("Invalid option. Try a again.")