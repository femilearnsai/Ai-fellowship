Voter_Name = set()
User1 = input("Full name: ")

if User1 not in Voter_Name:
   Voter_Name.add(User1)
else:
     print("No double registration.")

User2 = input("Full name: ")

if User2 not in Voter_Name:
   Voter_Name.add(User2)
else:
     print("No double registration.")

print(Voter_Name)