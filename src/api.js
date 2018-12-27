import axios from 'axios'

export const listGames = async () => {
    const userData = await axios.get(`http://localhost:8080/gamesheets/games`);
    return userData
}

export const currentUser = async (id) => {
     const userData = await axios.get(`http://localhost:8080/user/${id}`);
     return userData
}

export const visitFriend = async (friendId) => {
    const friendData = await axios.get(`http://localhost:8080/userssheet/view/${friendId}`)
    return friendData
}

export const addGame = async (id, game) => {
    const addGame = await axios.post(`http://localhost:8080/gamesheet/watchlist/add`, {
        id,
        game
    })
    return addGame
}

export const removeGame = async (id, game) => {
    const removeGame = await axios.post(`http://localhost:8080/gamesheet/watchlist/remove`, {
        id,
        game
    })
    return removeGame
}

export const followUser = async (currentUser, friendId) => {
    const addFriend = await axios.post(`http://localhost:8080/userssheet/followers/add`, {
        currentUser,
        friendId
    })
    return addFriend
}

export const removeFriend = async (currentUser, friendId) => {
    return { currentUser, friendId}
}