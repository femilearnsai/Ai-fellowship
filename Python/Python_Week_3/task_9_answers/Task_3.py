# define the set
# define an  input
#.remove the input from the set
# print the set
Football = ([1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17 , 18, 19, 20, 21, 22, 23,
            24, 25, 26, 27, 28, 29, 30, 31, 32, 33, 34, 35, 36, 37, 38, 39, 40, 41, 42, 43, 44, 45, 46, 47, 48, 49, 50])
Seat_No = int(input("Enter Seat No: "))
Football.remove(Seat_No)
print(f"remaining seats include {Football}")
print(f"Your Seat number {Seat_No} has been booked.")
Seat_No2 = int(input("Book another seat: "))
if Seat_No == Seat_No2:
    print("Seat is already taken.")
else:
    print("Seat has been booked")