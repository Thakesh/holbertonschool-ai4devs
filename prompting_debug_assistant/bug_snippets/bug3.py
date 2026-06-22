def find_user(users, username):
    for user in users:
        if user["name"] == username:
            return user

    return None


users = [
    {"name": "Alice"},
    {"name": "Bob"}
]

result = find_user(users, "Charlie")

print(result["name"])
