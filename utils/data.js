const usersList = [
    { username: "justin", email: "justin@gamil.com", friends: [] },
    { username: "phil", email: "phil@mail.com", friends: [] },
    { username: "taja", email: "taja@gmail.com", friends: [] },
    { username: "anisa", email: "anisa@gmail.com", friends: [] },
]

const friendsList = [
    { thoughtText: "hello from justin", username: "justin" },
    { thoughtText: "hello from phil", username: "phil" },
    { thoughtText: "hello from taja", username: "taja" },
    { thoughtText: "hello from anisa", username: "anisa" },
]

// Create a friends list
const getFriends = (currentUser) => {
    let results = [];
    for (let i = 0; i < 3; i++) {
        if (currentUser != friendsList[i].username){
            results.push(friendsList[i]); 
        }
    }
    return results;
};

// Create a users list
const getUsers = () => {
    let users = []
    for (let i = 0; i < usersList.length; i++) {
        usersList[i].friends = getFriends(usersList[i].username)
        users.push(usersList[i])
    }
    return users
};

module.exports = { getUsers };
