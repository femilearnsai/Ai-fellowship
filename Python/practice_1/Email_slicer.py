# define the function 
# collct email
# call the function



def mail_slicer(user_email):
    if "@" in user_email and '.' in user_email:
        username, service_provider = user_email.split("@")
        print(f"This {username} has this {service_provider}")
        return username, service_provider
    else:
        return None, None


# collect user input 
user_email = input("Enter user email: ")

print(mail_slicer(user_email))



