def format_book(book):
    status = "Available" if book["available"] else "Borrowed"
    return f"{book['title']} by {book['author']} - {status}"