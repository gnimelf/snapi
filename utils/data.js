const usersList = [
    { username: "justin", email: "justin@gamil.com", friends: [] },
    { username: "phil", email: "phil@mail.com", friends: [] },
    { username: "taja", email: "taja@gmail.com", friends: [] },
    { username: "anisa", email: "anisa@gmail.com", friends: [] },
]

// Create a users list
const getUsers = () => {
    let users = []
    for (let i = 0; i < usersList.length; i++) {
        users.push(usersList[i])
    }
    return users
};

module.exports = { getUsers };
