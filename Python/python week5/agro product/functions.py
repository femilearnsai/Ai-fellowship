# import path for file handling
from pathlib import Path
import json

File_name = Path("user_files")
File_name.mkdir(exist_ok=True)
main_file = File_name / "users.json"
main_file

class User:
    def __init__(self, name, phone_number, location, pin):
        #attributes
        self.name = name
        self.phone_number = phone_number
        self.location = location
        self.pin = pin

class Farmer(User):
    def __init__(self, name, phone_number, location, pin, product_name, unit, product_price, mode_of_payment, Type_of_farmer):
        super().__init__(name, phone_number, location, pin)
        self.product_name = product_name
        self.product_price = product_price
        self.mode_of_payment = mode_of_payment
        self.Type_of_farmer = Type_of_farmer
        self.unit = unit

class Buyer(User):
    def __init__(self, name, phone_number, location, pin, scale):
        super().__init__(name, phone_number, location, pin)
        self.scale = scale

    # collect info
    name = input("Enter your name: ")
    phone_number = int(input("Enter your name: "))
    location = input("Enter your location: ")
    pin = int(input("Enter your 4 digit pin: "))
    product_name = input("Enter your product name: ") 
    unit = input("Enter your unit of measurement")
    product_price = int(input(f"Enter product price per {unit}:"))
    mode_of_payment = input("Enter preferred mode of payment: ")

with open(main_file, "a", newline="", encoding="utf-8") as f:
    json.dump(f) 

