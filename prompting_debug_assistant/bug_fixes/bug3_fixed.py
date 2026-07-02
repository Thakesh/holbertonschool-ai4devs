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

if result is not None:
    print(result["name"])
else:
    print("User not found")
    