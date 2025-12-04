from pathlib import Path

tasks = []


workspace = Path("To_do_list")
workspace.mkdir(exist_ok=True)
file_name = workspace / "to_do.txt"

def add_task(task):
    with open(file_name, "a", encoding="utf-8") as f:
        f.write(f"\n{task}")
        tasks.append(task)
        f.close
    print(tasks)

def remove_task(task):
    with open(file_name, "w", encoding= "utf -8" ) as t:
       tasks.remove(task)
       for task in tasks:
            t.write(task + "\n")
    print(tasks)
    
    

def view_task(file_name):
    with open(file_name, "r", newline="", encoding = "utf -8") as j:
        tasks = j.readlines()
        for task in tasks:
            print(" ".join(task.splitlines()))
        




while True:
    print("Welcome to the most reliable to do list")
    print("1. To add task\n2. To remove task\n3. To view task\n4. To exit the program")
    # Asking for input    
    try:
        choice = int(input("Enter your desired option:"))
    except:
        print("Enter a positive integer") 


    if choice == 1:
        while True:
            task = input("Please enter your task: ")
            add_task(task)
            print(f"Your task has been added")
            done = input("Type done if you are done adding task").lower()
            if done == "done":
                break
    elif choice == 2:
        task = input("please enter the task to remove")
        remove_task(task)
        print("These task has been removed from the task list")
    elif choice == 3:
        view_task(file_name)
        print(f"These are your task:\n")
    elif choice == 4:
        print("Good bye")
        break
    else:
        print("please enter a valid option")