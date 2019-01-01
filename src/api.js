import axios from "axios";

export const listGames = async () => {
  const userData = await axios.get(`http://localhost:8080/gamesheets/games`);
  return userData;
};

export const currentUser = async id => {
  const userData = await axios.get(`http://localhost:8080/user/${id}`);
  return userData;
};

export const visitFriend = async friendId => {
  const friendData = await axios.get(
    `http://localhost:8080/userssheet/view/${friendId}`
  );
  return friendData;
};

export const addGame = async (userId, gameRowId) => {
  const addGame = await axios.put(`http://localhost:8080/user/watchlist/add`, {
    userId,
    gameRowId
  });
  return addGame;
};

export const unWatch = async (userId, gameRows) => {
  const removeGame = await axios.put(
    `http://localhost:8080/user/watchlist/remove`,
    {
      userId,
      gameRows
    }
  );
  return removeGame;
};

export const followUser = async (userId, friendRowId) => {
  const addFriend = await axios.put(
    `http://localhost:8080/userssheet/followers/add`,
    {
      userId,
      friendRowId
    }
  );
  return addFriend;
};

export const unfollowUser = async (userId, friendRowId) => {
  const removeFriend = await axios.post(
    `http://localhost:8080/userssheet/followers/remove`,
    {
      userId,
      friendRowId
    }
  );
  return removeFriend;
};

export const getUsers = async () => {
  const allUsers = await axios.get("http://localhost:8080/userssheet/all");
  return allUsers;
};
