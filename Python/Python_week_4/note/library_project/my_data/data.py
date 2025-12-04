books = []

def add_book(title, author):
    books.append({"title": title, "author": author, "available": True})

def get_books():
    return books

