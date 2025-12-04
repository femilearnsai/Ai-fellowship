
while True:
    USSD = input("Enter USSD (*123#): ")
    if USSD == '*123#':
        print("Welcome to Naija bank, where snake swallows money!")
        break
    else:
        print("Wrong input. Please input the right code.")
balance = 3000
while True: 
    print("1. Check Balance\n2. Buy Airtime\n3. Buy Data\n4. Exit")
    
    choice = input("enter: ")
    
    if choice == "1":
        print(f"Your account balance is {balance}")
        break
    elif choice == "2":
        amount =int(input("How much Airtime do you want to purchase: "))
        if amount <= balance:
            balance -= amount
            num = int(input("Enter phone number: "))
            print(f" Your number, {num}, has been credited with {amount} naira\n Your balance is {balance}")
            break
        else:
            print("Insufficient balance")
    elif choice == "3":
        print("1. N500 for 2gb")
        print("2. N1000 for 4gb")
        amount2 = int(input("Enter: "))
        num = int(input("Enter phone number: "))
        if amount2 == "1":
            print(f"You have received N500 for 2gb on {num}")
            break
        if amount2 == "2":
            print(f"You have received the sum of N1000 for 4gb on {num}")
            break
    elif choice == "4":
        print("Exiting program")
    else:
        print("Please, input an option!")